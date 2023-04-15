from flask import Flask

app = Flask(__name__)

@app.route("/note")
def note(): 
    respons = {
        "login": "my_login",
        "password": "my_password"
    }
    return respons

if __name__=="__main__":
    app.run(debug=True)
