import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const APP_DIR_NAME = path.basename(process.cwd());
// Check if 'content' folder exists in current directory (for deployment)
const LOCAL_CONTENT_DIR = path.join(process.cwd(), 'content');
const ROOT_DIR = fs.existsSync(LOCAL_CONTENT_DIR) ? LOCAL_CONTENT_DIR : path.resolve(process.cwd(), '..');

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const requestPath = searchParams.get('path') || '';
  const type = searchParams.get('type') || 'list'; // 'list' or 'content'

  // Prevent directory traversal above root
  const safePath = path.normalize(requestPath).replace(/^(\.\.[\/\\])+/, '');
  const absolutePath = path.join(ROOT_DIR, safePath);

  // Ensure we are strictly within ROOT_DIR
  if (!absolutePath.startsWith(ROOT_DIR)) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
  }

  if (type === 'content') {
    try {
      if (!fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isFile()) {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
      }
      const content = fs.readFileSync(absolutePath, 'utf-8');
      return NextResponse.json({ content });
    } catch (err) {
      return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
    }
  }

  try {
    const items = fs.readdirSync(absolutePath, { withFileTypes: true });

    const fileList = items
      .filter((item) => {
        const name = item.name;
        // Ignore hidden files and the app directory itself
        if (name.startsWith('.')) return false;
        if (path.join(requestPath, name) === APP_DIR_NAME) return false; // Ignore this app's folder at root
        return true;
      })
      .map((item) => ({
        name: item.name,
        type: item.isDirectory() ? 'directory' : 'file',
        path: path.join(requestPath, item.name),
      }));

    // Sort: Directories first, then alphabetical
    fileList.sort((a, b) => {
      if (a.type === b.type) return a.name.localeCompare(b.name);
      return a.type === 'directory' ? -1 : 1;
    });

    return NextResponse.json({ items: fileList });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to list directory' }, { status: 500 });
  }
}
