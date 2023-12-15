from flask import Flask, request, jsonify

app = Flask(__name__)

def calcular_pitagoras(a, b):
    c = (a**2 + b**2)**0.5
    return c

@app.route('/calcular_pitagoras', methods=['POST'])
def calcular():
    data = request.get_json()

    if 'a' not in data or 'b' not in data:
        return jsonify({'erro': 'Os parâmetros "a" e "b" são necessários'}), 400

    a = data['a']
    b = data['b']

    try:
        resultado = calcular_pitagoras(float(a), float(b))
        return jsonify({'resultado': resultado})
    except ValueError:
        return jsonify({'erro': 'Certifique-se de que "a" e "b" são números válidos'}), 400

if __name__ == '__main__':
    app.run(debug=True)
