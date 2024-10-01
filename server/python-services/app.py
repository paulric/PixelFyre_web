# Python Microservices (Optional)
# You can use Flask or FastAPI to integrate Python services for any data processing or machine 
# learning models. Here's a basic example using Flask:
# app.py (Flask Service)


from flask import Flask, jsonify, request
from textblob import TextBlob

app = Flask(__name__)
# Route to check if the service is running
@app.route('/analyze', methods=['GET'])
def analyze():
    return jsonify({"message": "Data analysis service is running"})

# Route to analyze sentiment of the provided content
@app.route('/analyze-sentiment', methods=['POST'])
def analyze_sentiment():
    content = request.json.get('content', '')
    analysis = TextBlob(content).sentiment
    return jsonify({
        'polarity': analysis.polarity,
        'subjectivity': analysis.subjectivity
    })

# Start the Flask server
if __name__ == '__main__':
    app.run(port=6000)
