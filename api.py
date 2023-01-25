from flask import Flask, render_template, jsonify
app = Flask(__name__)
#if __name__ == "__main__"
#para que usem apenas a operacao principal

@app.route("/Calculadora/requerements", methods=["GET"])
def requerements():
    return  jsonify(open('requirements.txt', 'r'))

@app.route("/Calculadora/resumo", methods=["GET"])
def resumo():
    return  open('../resumoCodigoCalculadora.txt', 'r')


@app.route("/Calculadora")
def Calculadora():
    return  render_template('index.html')
    
    
    
#if __name__ == "__main__"
app.run(debug=True)

