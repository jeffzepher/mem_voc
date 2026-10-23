import http.server,threading,urllib.request,json
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),http.server.SimpleHTTPRequestHandler)
threading.Thread(target=server.serve_forever,daemon=True).start()
base='http://127.0.0.1:'+str(server.server_port)+'/'
try:
 for name in ['index.html','app.js','style.css','data/catalog.json','data/toefl-common.json']:
  with urllib.request.urlopen(base+name) as response:
   assert response.status==200
   data=response.read()
   if name.endswith('.json'):json.loads(data.decode('utf-8'))
 print('HTTP files and JSON responses verified.')
finally:server.shutdown();server.server_close()
