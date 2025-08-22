#!/bin/bash

echo "🎯 Jack Ferreri Resume Website - Quick Start"
echo "=============================================="
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found, starting local server..."
    echo ""
    python3 server.py
elif command -v python &> /dev/null; then
    echo "✅ Python found, starting local server..."
    echo ""
    python server.py
else
    echo "❌ Python not found. Please install Python to use the local server."
    echo ""
    echo "Alternative: Open index.html directly in your browser"
    echo "Or use any other local server like:"
    echo "  - npx serve ."
    echo "  - php -S localhost:8000"
    echo "  - live-server"
    echo ""
    read -p "Press Enter to continue..."
fi
