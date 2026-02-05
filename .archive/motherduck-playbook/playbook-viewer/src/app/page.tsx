"use client";

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import {
  Folder,
  FileText,
  ChevronRight,
  ChevronDown,
  Search,
  Lock,
  Menu,
  X,
  RefreshCw,
  Layout,
  File as FileIcon,
  Code,
  CheckSquare
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// --- Authentication ---
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'bdrduck') {
      onLogin();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[#37352F] font-sans">
      <div className="w-full max-w-sm p-8">
        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 text-4xl">
            🦆
          </div>
          <h1 className="text-2xl font-bold text-[#37352F] tracking-tight">
            MotherDuck Playbook
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className="w-full bg-white border border-[rgba(55,53,47,0.16)] focus:border-[#2383E2] text-[#37352F] rounded-[4px] px-3 py-2 outline-none transition-all placeholder:text-[rgba(55,53,47,0.4)] shadow-sm focus:shadow-[0_0_0_2px_rgba(35,131,226,0.2)]"
              placeholder="Enter password"
              autoFocus
            />
          </div>
          {error && <p className="text-[#EB5757] text-xs text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#2383E2] text-white font-medium py-2 rounded-[4px] hover:bg-[#1B6FB8] transition-colors text-sm shadow-sm"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Main App ---

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [selectedFile, setSelectedFile] = useState<{ path: string; name: string } | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem('playbook_auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('playbook_auth', 'true');
    setIsAuthenticated(true);
  };

  useEffect(() => {
    const handleNavigation = (e: CustomEvent<string>) => {
      const targetPath = e.detail;
      if (!targetPath) return;

      // Logic to determine if it's a file or folder would typically go here
      // For now, we assume if it ends in .md it's a file

      const newPath = targetPath.startsWith('/') ? targetPath.slice(1) : targetPath;
      // Resolve relative paths if needed, but for now assuming we get a clean path or need to handle relative from current
      // This simple implementation assumes paths are relative to root or absolute for now
      // A more robust relative path resolver would be better if we assume relative links in MD

      // Attempt to resolve relative if current file is known
      let resolvedPath = newPath;
      if (selectedFile && !newPath.startsWith('/')) {
        const currentDir = selectedFile.path.split('/').slice(0, -1).join('/');
        resolvedPath = currentDir ? `${currentDir}/${newPath}` : newPath;

        // Handle ..
        const parts = resolvedPath.split('/');
        const stack = [];
        for (const part of parts) {
          if (part === '..') stack.pop();
          else if (part !== '.') stack.push(part);
        }
        resolvedPath = stack.join('/');
      }

      const isFile = resolvedPath.toLowerCase().endsWith('.md');

      if (isFile) {
        setSelectedFile({ path: resolvedPath, name: resolvedPath.split('/').pop() || '' });
        // Update currentPath to the parent directory of the file so sidebar highlights correctly
        const parentDir = resolvedPath.split('/').slice(0, -1).join('/');
        setCurrentPath(parentDir);
      } else {
        setCurrentPath(resolvedPath);
      }
    };

    window.addEventListener('navigate-to-path' as any, handleNavigation as any);
    return () => window.removeEventListener('navigate-to-path' as any, handleNavigation as any);
  }, [selectedFile]);

  if (!isAuthenticated) return <LoginScreen onLogin={handleLogin} />;

  return (
    <div className="flex h-screen bg-white text-[#37352F] font-sans overflow-hidden">
      <Sidebar
        currentPath={currentPath}
        onNavigate={setCurrentPath}
        onSelectFile={setSelectedFile}
        selectedFile={selectedFile}
      />
      <MainContent file={selectedFile} />
    </div>
  );
}

function Sidebar({ currentPath, onNavigate, onSelectFile, selectedFile }: any) {
  const { data, error } = useSWR(`/api/files?path=${encodeURIComponent(currentPath)}`, fetcher, { refreshInterval: 2000 });

  const handleUp = () => {
    if (!currentPath) return;
    const parts = currentPath.split('/');
    parts.pop();
    onNavigate(parts.join('/'));
  };

  return (
    <div className="w-64 border-r border-[#E8E8E8] flex flex-col bg-[#F7F7F5] h-full flex-shrink-0">
      <div className="p-3 flex items-center gap-2 hover:bg-[#EFEFED] cursor-pointer transition-colors m-1 rounded-[4px]">
        <div className="w-5 h-5 flex items-center justify-center bg-white border border-[#E8E8E8] rounded shadow-sm text-xs">
          🦆
        </div>
        <span className="font-medium text-sm truncate flex-1 text-[#37352F]">MotherDuck Playbook</span>
        {currentPath && (
          <button onClick={(e) => { e.stopPropagation(); handleUp(); }} className="text-[#37352F]/40 hover:text-[#37352F] p-1">
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-1 py-2 custom-scrollbar">
        {!data && !error && <div className="px-3 py-1 text-[#37352F]/50 text-xs">Loading...</div>}

        {data?.items?.map((item: any) => (
          <div
            key={item.path}
            onClick={() => item.type === 'directory' ? onNavigate(item.path) : onSelectFile(item)}
            className={cn(
              "flex items-center gap-2 px-3 py-1 min-h-[28px] rounded-[4px] cursor-pointer text-sm transition-colors group select-none",
              selectedFile?.path === item.path
                ? "bg-[#EFEFED] text-[#37352F] font-medium"
                : "text-[#5F5E5B] hover:bg-[#EFEFED] hover:text-[#37352F]"
            )}
          >
            {item.type === 'directory' ? (
              <span className="text-base leading-none opacity-80 group-hover:opacity-100 transition-opacity">📁</span>
            ) : (
              <span className="text-base leading-none opacity-80 group-hover:opacity-100 transition-opacity">📄</span>
            )}
            <span className="truncate flex-1">{item.name}</span>
          </div>
        ))}

        {data?.items?.length === 0 && (
          <div className="px-4 py-2 text-[#37352F]/40 text-xs italic">No pages inside</div>
        )}
      </div>
    </div>
  );
}

function MainContent({ file }: { file: { path: string, name: string } | null }) {
  const { data, isLoading } = useSWR(file ? `/api/files?type=content&path=${encodeURIComponent(file.path)}` : null, fetcher);

  if (!file) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-[#37352F]/40 bg-white">
        <div className="text-6xl mb-4 opacity-20">👋</div>
        <p className="font-medium">Select a page to view</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-white h-full overflow-hidden">
      <div className="flex items-center gap-2 px-12 py-3 text-sm text-[#37352F]/60 h-11 flex-shrink-0">
        <span className="hover:text-[#37352F] cursor-pointer flex items-center gap-1">
          <span className="text-lg">📄</span> {file.name}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-12 md:px-24 lg:px-32 pb-32 custom-scrollbar">
        {isLoading ? (
          <div className="pt-12 text-[#37352F]/40 flex items-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin" /> Loading...
          </div>
        ) : (
          <div className="max-w-[900px] mx-auto pt-12">
            {/* Visual Header */}
            <div className="group mb-8">
              <div className="h-40 -mt-12 -mx-32 bg-gradient-to-r from-[#FDE8E8] to-[#E8FDF5] opacity-50 mb-8 rounded-b-xl hidden"></div>
              <div className="text-7xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {file.name.toLowerCase().includes('finance') ? '💸' :
                  file.name.toLowerCase().includes('product') ? '🔨' :
                    file.name.toLowerCase().includes('bdr') ? '🎯' : '📄'}
              </div>
              <h1 className="text-4xl font-bold text-[#37352F] tracking-tight border-b-0 pb-0">
                {file.name.replace(/\.(md|txt)$/, '')}
              </h1>
            </div>

            {file.name.toLowerCase().endsWith('.md') ? (
              <article className="prose prose-neutral max-w-none 
                        prose-headings:text-[#37352F] prose-headings:font-bold prose-headings:tracking-tight
                        prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#E8E8E8] prose-h2:pb-2
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                        prose-p:text-[#37352F] prose-p:leading-8 prose-p:my-6
                        prose-a:text-[#37352F] prose-a:underline prose-a:decoration-[#37352F]/30 hover:prose-a:decoration-[#37352F] prose-a:transition-all
                        prose-strong:font-semibold prose-strong:text-[#37352F]
                        prose-code:text-[#EB5757] prose-code:bg-[#F7F6F3] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-[3px] prose-code:font-mono prose-code:text-[0.85em] prose-code:before:content-[''] prose-code:after:content-['']
                        prose-pre:bg-[#F7F6F3] prose-pre:text-[#37352F] prose-pre:border-none prose-pre:p-4 prose-pre:rounded-[4px] prose-pre:my-6
                        prose-hr:border-[#E8E8E8] prose-hr:my-10
                        prose-blockquote:border-l-[3px] prose-blockquote:border-l-[#37352F] prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:my-6 prose-blockquote:text-[#37352F] prose-blockquote:not-italic
                        prose-ul:marker:text-[#37352F] prose-ul:pl-6 prose-ul:my-4
                        prose-ol:marker:text-[#37352F] prose-ol:pl-6 prose-ol:my-4
                        prose-li:my-3 prose-li:pl-1 prose-li:leading-7
                        prose-table:border-collapse prose-table:border prose-table:border-[#E8E8E8] prose-table:w-full prose-table:my-8
                        prose-th:bg-[#F7F6F3] prose-th:text-[#37352F] prose-th:font-semibold prose-th:p-2 prose-th:text-left prose-th:border prose-th:border-[#E8E8E8]
                        prose-td:p-2 prose-td:border prose-td:border-[#E8E8E8] prose-td:text-sm
                    ">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkBreaks]}
                  components={{
                    code({ node, inline, className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '')
                      const codeContent = String(children).replace(/\n$/, '');

                      // Check if this is a code block (has newlines or language specified)
                      const isCodeBlock = !inline && (match || codeContent.includes('\n'));

                      if (isCodeBlock) {
                        return (
                          <SyntaxHighlighter
                            {...props}
                            style={oneLight}
                            language={match ? match[1] : 'text'}
                            PreTag="div"
                            customStyle={{
                              margin: 0,
                              borderRadius: '4px',
                              background: '#F7F6F3',
                              fontSize: '0.85rem',
                              whiteSpace: 'pre',
                              lineHeight: '1.6'
                            }}
                            codeTagProps={{
                              style: {
                                whiteSpace: 'pre',
                                display: 'block'
                              }
                            }}
                          >
                            {codeContent}
                          </SyntaxHighlighter>
                        );
                      }

                      return (
                        <code {...props} className={className}>
                          {children}
                        </code>
                      );
                    },
                    pre({ node, children, ...props }: any) {
                      return (
                        <pre
                          {...props}
                          style={{
                            margin: '1.5em 0',
                            padding: '1em',
                            background: '#F7F6F3',
                            borderRadius: '4px',
                            overflow: 'auto'
                          }}
                        >
                          {children}
                        </pre>
                      );
                    },
                    p({ node, children, ...props }: any) {
                      return (
                        <p {...props} style={{ marginTop: '1.25em', marginBottom: '1.25em' }}>
                          {children}
                        </p>
                      );
                    },
                    a({ node, href, children, ...props }: any) {
                      const isExternal = href?.startsWith('http');
                      const handleClick = (e: React.MouseEvent) => {
                        if (!isExternal && href) {
                          e.preventDefault();
                          if (href.startsWith('#')) {
                            const id = href.substring(1);
                            const element = document.getElementById(id);
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            // Dispatch event for internal navigation
                            window.dispatchEvent(new CustomEvent('navigate-to-path', { detail: href }));
                          }
                        }
                      };

                      return (
                        <a
                          href={href}
                          onClick={handleClick}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          {...props}
                        >
                          {children}
                        </a>
                      );
                    }
                  }}
                >
                  {data?.content || ''}
                </ReactMarkdown>
              </article>
            ) : (
              <pre className="font-mono text-sm text-[#37352F] bg-[#F7F6F3] p-6 rounded-[4px] overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {data?.content || 'No content'}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
