
# from flask import Flask


# app = Flask(__name__)
# socketio = SocketIO(app)

# log = logging.getLogger('werkzeug')
# log.setLevel(logging.ERROR)


# @socketio.on('message')
# def message(data):
#     print(data)  # {'from': 'client'}
#     emit('response', {'from': 'server'})


# if __name__ == '__main__':
#     socketio.run(app, port=8000, debug=True)

#-----------------------------------------
#-----------------------------------------
from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def index():
    title = "Your Page Title"
    return render_template("main.html", title=title)



if __name__ == "__main__":
    app.run()
  
    