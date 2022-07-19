		var itemList = [];
		// 배열 ▸변수를 여러개 저장할 수 있는 자료형, 값을 정할 때 구분번호 0부터 시작.
		// itemList에 배열 받음
		
		var addBtn = document.querySelector("#add");
		// add를 addBtn에 변수 저장
		//document.querySelector(선택자) ▸HTML 요소를 가져온다.

		addBtn.addEventListener("click", addList);
		// addBtn 클릭했을 때, addList 실행
		//요소.addEventListener("이벤트", 함수명) ▸ 여러개의 이벤트핸들러 등록 가능!
		
		// 아이템 항목 추가하기 addList()함수
		function addList() {
			var item = document.querySelector("#item").value;
			// 사용자가 값을 입력하는 곳
			// item id 값을 item에 변수 저장
			if (item != null && item != '') {
				// 값이 null 아니면서 공백이 아닐경우 ( = 값이 있으면)
				// null : 값이 존재하지 않는 상태
				itemList.push(item);
				// itemList 배열의 끝에 item 변수 값 추가
				// push ▸배열의 가장 뒤에 값 추가
				document.querySelector("#item").value = "";
				// 값을 추가 받은 후 item에 value 값을 비워 텍스트 필드에 입력값을 지움
				// id가 item인 요소의 값을 공백으로 처리
				document.querySelector("#item").focus();
				// input text에 focus() 메서드 커서 깜빡임 적용
				showList();
				// 변경된 addList 배열을 다시 화면에 표시
			}
			else{
				alert(`목록을 작성하세요!`);
				// if 조건을 만족하지 않으면 (= 값이 없으면)
			}
			
		}
		
		// 리스트 보여주기 항목 추가하기 showList() 함수
		function showList() {
			var list = "<ul>";
			// <ul> 목록열기 
			for (var i=0; i<itemList.length; i++) {
				// itemList.length 길이만큼 반복
				list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";  
				// 요소와 삭제 버튼을 <li></li>로 묶음
				// temList[i]에 [i]를 넣는 이유는 itemList의  인덱스 번호를 구분해서 삭제하기 위함
			}
			list += "</ul>"; 
			// </ul> 목록 닫기
			
			document.querySelector('#itemList').innerHTML = list;
			// inneHTML에 list 내용표시

			var remove = document.querySelectorAll(".close");
			// 삭제버튼을 변수로 저장
			for(var i = 0; i < remove.length; i++) {  
				// remove.length 길이만큼 배열 요소 확인
				remove[i].addEventListener("click", removeList); 
				// 요소를 클릭하면 removeList() 실행
			}
		}
		
		// 리스트 삭제하기 항목 제거하기 removeList() 함수
		function removeList() {
			var id = this.getAttribute("id");
			// this(클릭한삭제버튼)의 id 값을 가져와서 id 변수에 저장
			itemList.splice(id, 1); 
			// itemList 배열에서 인덱스의 값이 id인 요소 1개 삭제
			showList();
			// 변경된 itemList 배열을 다시 화면에 표시
		}