from flask import Flask, request, jsonify
from flask_cors import CORS
from pygrok import Grok

app = Flask(__name__)
CORS(app)


@app.route('/api/grokInput', methods=['POST'])
def hello():
    # print("hello World")
    data = request.get_json()

    grokInput = data["grokInput"]
    grokPattern = data["grokPattern"]

    print(grokInput)
    print(grokPattern)

    grok = Grok(grokPattern)

    matched = grok.match(grokInput)

    print(matched)

    # print(data)
    return matched
if __name__ == '__main__':
    app.run(debug=True)