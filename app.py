from pymongo import MongoClient

from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# 서버 배포용
# client = MongoClient('mongodb://test:test@localhost', 27017)
# db = client.dbBud

# 로컬 테스트용
client = MongoClient('localhost', 27017)
db = client.dbBud_test

# HTML 화면 보여주기
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login')
def login_page():
    return render_template('login.html')

@app.route('/signup')
def signup_page():
    return render_template('signup.html')

@app.route('/lend')
def lend_page():
    return render_template('lend.html')

## API 역할을 하는 부분
@app.route('/lend', methods=['POST'])
def register_loan():
# 1. 클라이언트가 준 title, author, review 가져오기.
    lender_name_receive = request.form['lender_name_give']
    lender_phone_receive = request.form['lender_phone_give']
    lender_email_receive = request.form['lender_email_give']
    lender_dob_receive = request.form['lender_dob_give']
    borrower_name_receive = request.form['borrower_name_give']
    borrower_phone_receive = request.form['borrower_phone_give']
    borrower_email_receive = request.form['borrower_email_give']
    borrower_dob_receive = request.form['borrower_dob_give']
    loan_sum_receive = request.form['loan_sum_give']
    loan_strikedate_receive = request.form['loan_strikedate_give']
    loan_expirydate_receive = request.form['loan_expirydate_give']
    loan_interest_receive = request.form['loan_interest_give']
    loan_pw_receive = request.form['loan_pw_give']

# 2. DB에 정보 삽입하기
    loan = {
        'lender_name': lender_name_receive,
        'lender_phone': lender_phone_receive,
        'lender_email': lender_email_receive,
        'lender_dob' : lender_dob_receive,
        'borrower_name': borrower_name_receive,
        'borrower_phone': borrower_phone_receive,
        'borrower_email': borrower_email_receive,
        'borrower_dob': borrower_dob_receive,
        'loan_sum': loan_sum_receive,
        'loan_strikedate': loan_strikedate_receive,
        'loan_expirydate': loan_expirydate_receive,
        'loan_interest': loan_interest_receive,
        'loan_pw': loan_pw_receive,
    }

    db.loans.insert_one(loan)

# 3. 성공 여부 & 성공 메시지 반환하기
#     return jsonify({'result': 'success', 'msg': '빌려준 내역이 성공적으로 저장되었습니다.'})
    return jsonify({'result': 'success', 'msg': '입력하신 내역을 통해 작성된 차용증을 확인해주세요.'})

@app.route('/lend-confirm')
def lend_confirm_page():
    return render_template('lend-confirm.html')

@app.route('/loan-history', methods=['GET'])
def recall_loans():
    loans = list(db.loans.find({}, {'_id': 0}))
    return jsonify({'result': 'success', 'loans': loans})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5009, debug=True)