const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
            // console.log(index / 5 + 0.2);
        })
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();

//lend.html API javascript
function makeLoan() {
    // 1. 화면에 입력어 있는 제목, 저자, 리뷰 내용을 가져옵니다.
    let lender_name = $("#lender-name").val();
    let lender_phone = $("#lender-phone").val();
    let lender_email = $("#lender-email").val();
    let lender_dob = $("#lender-dob").val();
    let borrower_name = $("#borrower-name").val();
    let borrower_phone = $("#borrower-phone").val();
    let borrower_email = $("#borrower-email").val();
    let borrower_dob = $("#borrower-dob").val();
    let loan_sum = $("#loan-sum").val();
    let loan_strikedate = $("#loan-strikedate").val();
    let loan_expirydate = $("#loan-expirydate").val();
    let loan_interest = $("#loan-interest").val();
    let loan_pw = $("#loan-pw").val();

    // 2. 제목, 저자, 리뷰 중 하나라도 입력하지 않았을 경우 alert를 띄웁니다. [테스팅 시, 비활성]
    // if (lender_name == "") {
    //     alert("빌려주는 사람의 이름을 입력해주세요");
    //     $("#lender-name").focus();
    //     return;
    // } else if (lender_phone == "") {
    //     alert("빌려주는 사람의 전화번호를 입력해주세요");
    //     $("#lender-phone").focus();
    //     return;
    // } else if (lender_email == "") {
    //     alert("빌려주는 사람의 이메일을 입력해주세요");
    //     $("#lender-email").focus();
    //     return;
    // } else if (lender_dob == "") {
    //     alert("빌려주는 사람의 생년월일을 입력해주세요");
    //     $("#lender-dob").focus();
    //     return;
    // } else if (borrower_name == "") {
    //     alert("빌리는 사람의 이름을 입력해주세요");
    //     $("#borrower-name").focus();
    //     return;
    // } else if (borrower_phone == "") {
    //     alert("빌리는 사람의 전화번호를 입력해주세요");
    //     $("#borrower-phone").focus();
    //     return;
    // } else if (borrower_email == "") {
    //     alert("빌리는 사람의 이메일을 입력해주세요");
    //     $("#borrower-email").focus();
    //     return;
    // } else if (borrower_dob == "") {
    //     alert("빌리는 사람의 생년월일을 입력해주세요");
    //     $("#borrower-dob").focus();
    //     return;
    // } else if (loan_sum == "") {
    //     alert("빌려주는 액수를 입력해주세요");
    //     $("#loan-sum").focus();
    //     return;
    // } else if (loan_strikedate == "") {
    //     alert("해당 액수를 빌려준 날짜를 입력해주세요");
    //     $("#loan-strikedate").focus();
    //     return;
    // } else if (loan_expirydate == "") {
    //     alert("빌려준 금액을 돌려받을 날짜를 입력해주세요");
    //     $("#loan-expirydate").focus();
    //     return;
    //     // } else if (loan_interest == "") {
    //     //     alert("적용되는 이자를 입력해주세요");
    //     //     $("#lender-dob").focus();
    //     //     return;
    // } else if (loan_pw == "") {
    //     alert("해당 내역을 조회할 때 사용 기억하기 쉬운 비밀번호를 입력해주세요");
    //     $("#loan-pw").focus();
    //     return;
    // }

    // 3. POST /review 에 저장(Create)을 요청합니다.

    //날짜 선택 시, 선택가능한 최대 일자가 오늘로 설정되도록 하는 javascript
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth() + 1; //January is 0!
    // var yyyy = today.getFullYear();
    // if (dd < 10) {
    //     dd = '0' + dd
    // }
    // if (mm < 10) {
    //     mm = '0' + mm
    // }
    //
    // today = yyyy + '-' + mm + '-' + dd;
    // document.getElementsByClassName("datefield").setAttribute("max", today);

    $.ajax({
        type: "POST",
        url: "/lend",
        data: {
            lender_name_give: lender_name, lender_phone_give: lender_phone, lender_email_give: lender_email,
            lender_dob_give: lender_dob, borrower_name_give: borrower_name, borrower_phone_give: borrower_phone,
            borrower_email_give: borrower_email, borrower_dob_give: borrower_dob, loan_sum_give: loan_sum,
            loan_strikedate_give: loan_strikedate, loan_expirydate_give: loan_expirydate,
            loan_interest_give: loan_interest, loan_pw_give: loan_pw
        },
        success: function (response) {
            if (response["result"] == "success") {
                alert(response["msg"]);
                window.location.reload();
                window.location.replace('http://0.0.0.0:5009/lend-confirm')
            }
        }
    })
}

function showLoans() {
		// 1. 리뷰 목록을 서버에 요청하기
		// 2. 요청 성공 여부 확인하기
		// 3. 요청 성공했을 때 리뷰를 올바르게 화면에 나타내기
    $.ajax({
        type: "GET",
        url: "/loan-history",
        data: {},
        success: function (response) {
            if (response['result'] == 'success') {
                alert('리뷰를 받아왔습니다.');
								// 2. 성공했을 때 리뷰를 올바르게 화면에 나타내기
            } else {
                alert('리뷰를 받아오지 못했습니다');
            }
        }
    })
}

//대출 내역 확인 기능
function showLoans() {
		// 1. 리뷰 목록을 서버에 요청하기
    $.ajax({
        type: "GET",
        url: "/loan-history",
        data: {},
        success: function (response) {
						// 2. 요청 성공 여부 확인하기
            if (response["result"] == "success") {
                let loans = response["loans"];
							  // 3. 요청 성공했을 때 리뷰를 올바르게 화면에 나타내기
                for (let i = 0; i < loans.length; i++) {
                    makeCard(loans[i]["lender_name"], loans[i]["lender_phone"], loans[i]["lender_email"],
                        loans[i]["lender_dob"], loans[i]["borrower_name"], loans[i]["borrower_phone"],
                        loans[i]["borrower_email"], loans[i]["borrower_dob"], loans[i]["loan_sum"],
                        loans[i]["loan_strikedate"], loans[i]["loan_expirydate"], loans[i]["loan_interest"],
                        loans[i]["loan_pw"]);
                }
            } else {
                alert("대출 내역을 찾아오지 못했습니다.");
            }
        }
    })
}


function makeCard(lender_name, lender_phone, lender_email, lender_dob, borrower_name, borrower_phone, borrower_email
borrower_email, borrower_dob, loan_sum, loan_strikedate, loan_expirydate, loan_interest, loan_pw) {
    let tempHtml = `<tr>
                        <td>${lender_name}</td>
                        <td>${lender_phone}</td>
                        <td>${lender_email}</td>
                        <td>${borrower_name}</td>
                        <td>${borrower_phone}</td>
                        <td>${borrower_email}</td>
                        <td>${loan_sum}</td>
                        <td>${loan_strikedate}</td>
                        <td>${loan_expirydate}</td>
                        <td>${loan_interest}</td>
                    </tr>`;
    $("#loans-box").append(tempHtml);
}