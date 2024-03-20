
from flask import Flask
from flask_socketio import SocketIO, emit
import logging

app = Flask(__name__)
socketio = SocketIO(app)

log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)


@socketio.on('message')
def message(data):
    print(data)  # {'from': 'client'}
    emit('response', {'from': 'server'})


if __name__ == '__main__':
    socketio.run(app, port=8000, debug=True)

#-----------------------------------------
#-----------------------------------------
# from flask import Flask, render_template
# from flask_socketio import SocketIO, send

# app = Flask(__name__)
# app.config['SECRET_KEY'] = 'secret!'
# socketio = SocketIO(app)

# @app.route('/')
# def index():
#     title = "Your Page Title"
#     return render_template("main.html", title=title)

# @socketio.on('message')
# def handle_message(data):
#     send(data, broadcast=True)


# if __name__ == '__main__':
#     socketio.run(app, debug=True)


# async def handler(websocket):
#     async for message in websocket:
#         print(f"Received message from client: {message}")
#         # Process the received message (e.g., modify it)
#         processed_message = f"Echo: {message}"
#         answer = input("message for client: ")
#         await websocket.send(answer)