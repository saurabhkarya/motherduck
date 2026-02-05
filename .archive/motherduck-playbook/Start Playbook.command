#!/bin/bash
cd "$(dirname "$0")/playbook-viewer"
echo "🦆 Starting MotherDuck Playbook..."
echo "Opening in browser..."
open http://localhost:3000
npm start
