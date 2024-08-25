from flask import Flask, send_from_directory, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ISL_Gifs/<path:filename>')
def serve_gif(filename):
    return send_from_directory('ISL_Gifs', filename)

if __name__ == '__main__':
    app.run(debug=True)
