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





//Lend confirm message (차용증 확인 페이지)
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

