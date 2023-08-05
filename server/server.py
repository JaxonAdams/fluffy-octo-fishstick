'Main server code'

from flask import Flask

app = Flask(__name__)

@app.route('/api/')
def base_route():
    'Base API route'
    return {
        'message': 'Hello, world!'
    }, 200
