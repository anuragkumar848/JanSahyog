from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/new_voice_assistant')
def new_voice_assistant():
    return render_template('new_voice_assistant.html')

@app.route('/new_chatbot')
def new_chatbot():
    return render_template('new_chatbot.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')
if __name__ == '__main__':
    app.run(debug=True)