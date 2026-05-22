#!/bin/sh
# Verifica que access.hillelargentina.org.ar apunte a Vercel
set -e
echo "DNS A record:"
dig access.hillelargentina.org.ar A +short
echo ""
echo "HTTPS:"
curl -sI --max-time 10 https://access.hillelargentina.org.ar | head -5
echo ""
echo "Esperado: 76.76.21.21 y HTTP/2 200"
