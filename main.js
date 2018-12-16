//버튼0을 누르면, 
//	모든 버튼들은 주황색 제거
//	버튼0이 주황색으로 변하고, 
//	모든 내용들은 안보이게.
//	내용0이 보임.
	
	var 버튼 = document.querySelectorAll('.tab-button');
	var 탭 = document.querySelectorAll('.tab-content');

//for (let i = 0; i < 3; i++){
//
//	버튼[i].addEventListener('click',function(){
//		버튼하이라이트(i);
//		탭하이라이트(i);
//	});
//}

function 버튼하이라이트(number){
	버튼[0].classList.remove('active');
	버튼[1].classList.remove('active');
	버튼[2].classList.remove('active');
	버튼[number].classList.add('active');
}

function 탭하이라이트(number){
		탭[0].classList.remove('show-tab');
		탭[1].classList.remove('show-tab');
		탭[2].classList.remove('show-tab');
		탭[number].classList.add('show-tab');
}

		



//탭기능 고수버전

//<ul>여기다가 addEventListener를 달아줌.
document.querySelector('ul.list').addEventListener('click',function(e){
	
	버튼하이라이트(e.target.dataset.id);
	탭하이라이트(e.target.dataset.id);
	
});

//	1. 지금 누른게 버튼 0일 경우, 
//		- 버튼0,1,2에 붙은 주황색 제거
//		- 버튼0에 주황색 붙이기
//		- 탭0,1,2 안보이게 처리
//		- 탭0 보여줌
//		
//	2. 지금 누른게 버튼 1일 경우..
//		- ...
//
//	3. 지금 누른게 버튼 2일 경우..
//	 	- ...


function plus (a,b){
	console.log(a+b);
}

//버튼1을 누르면, 버튼1이 주황색으로 변하고, 내용1이 보임.
//버튼2을 누르면, 버튼2이 주황색으로 변하고, 내용2이 보임.


//장바구니 추가 기능 만들기

//1. Add to cart 버튼을 눌렀을 때, 
//	2. 사용자가 입력한 값(value)를 가져와서 
//	3. {데이터}를 만들고
//	4. 이걸 글자로 변환해서
//	5. localStorage에 product1이라는 key로 저장하기
//	
	
	document.getElementById('add').addEventListener('click',function(){
		
		var data = {
			name : 'Blossom Dress',
			number : document.getElementById('quantity').value,
			size : document.getElementById('size').value,
			color : document.getElementById('color').value
		}
		var data2 = JSON.stringify(data);
		localStorage.setItem('product1', data2);
		
	});
	
	
	






















