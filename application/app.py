from flask import Flask, render_template
import asyncio
import websockets

app = Flask(__name__)

async def handler(websocket):
    async for message in websocket:
        print(f"Received message from client: {message}")
        # Process the received message (e.g., modify it)
        processed_message = f"Echo: {message}"
        answer = input("message for client: ")
        await websocket.send(answer)

@app.route('/')
def index():
    title = "Your Page Title"
    return render_template("main.html", title=title)

async def main():
    async with websockets.serve(handler, "", 8765):
        await asyncio.Future()  # run forever
   

if __name__ == '__main__':
    await asyncio.gather(app.run(),)
    app.run(debug=True),
    asyncio.run(main()) 
  
       
 
