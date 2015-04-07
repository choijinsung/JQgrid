// 모듈을 추출합니다.
var http = require('http');
var express = require('express');
var _ = require('underscore');
var cors = require('cors');

// 변수를 선언합니다.
var books = [{
	id: 1,
	name: 'Me Before You',
	author: '조조 모예스',
	isbn: '9788952227829',
	page: '536',
	publisher: '살림'
}, {
	id: 2,
	name: '30 lessons for living',
	author: '칼 필레머',
	isbn: '9788994013503',
	page: '340',
	publisher: '토네이도'
}, {
	id: 3,
	name: '닥치고 군대 육아',
	author: '김선미',
	isbn: '9788925552910',
	page: '292',
	publisher: '알에이치코리아'
}, {	
	id: 4,
	name: '월급쟁이 부자들',
	author: '이명로',
	isbn: '9791185541006',
	page: '320',
	publisher: '스마트북스'
}, {	
	id: 5,
	name: '기록',
	author: '윤태영',
	isbn: '9791185494364',
	page: '304',
	publisher: '책담'
}, {	
	id: 6,
	name: '내가 사랑한 유럽 TOP10',
	author: '정여울',
	isbn: '9788970653976',
	page: '360',
	publisher: '홍익출판사'
}, {	
	id: 7,
	name: '말공부',
	author: '조윤제',
	isbn: '9788965961055',
	page: '328',
	publisher: '흐름출판'
}, {	
	id: 8,
	name: '나는 까칠하게 살기로 했다',
	author: '양창순',
	isbn: '9788996746416',
	page: '319',
	publisher: '센추리원'
}, {	
	id: 9,
	name: '마법천자문 28',
	author: '올댓스토리',
	isbn: '9788950954949',
	page: '164',
	publisher: '아울북'
}, {	
	id: 10,
	name: '지금 중국 주식 천만원이면 10년 후 강남 아파트를 산다',
	author: '정순필',
	isbn: '9791185021065',
	page: '228',
	publisher: '스마트비즈니스'
}, {	
	id: 11,
	name: '겨울왕국 OST 피아노 연주곡집',
	author: '스코어 편집부',
	isbn: '9788998522704',
	page: '100',
	publisher: '스코어'
}, {
	id: 12,
	name: '에드워드 툴레인의 신기한 여행',
	author: '케이트 디카밀로',
	isbn: '9788949171197',
	page: '201',
	publisher: '비룡소'
}, {
	id: 13,
	name: '어떤 하루',
	author: '신준모',
	isbn: '9788993734348',
	page: '268',
	publisher: '프롬북스'
}, {	
	id: 14,
	name: '나의 문화유산답사기 일본편 3',
	author: '유홍준',
	isbn: '9788936472436',
	page: '410',
	publisher: '창비'
}, {	
	id: 15,
	name: '임신출산육아대백과',
	author: '삼성출판사 편집부',
	isbn: '9788915048249',
	page: '400',
	publisher: '삼성출판사'
}, {	
	id: 16,
	name: '삐뽀삐뽀 119소아과',
	author: '하정훈',
	isbn: '9788976820532',
	page: '107',
	publisher: '그린비라이프'
}, {	
	id: 17,
	name: '마법의 설탕 두 조각',
	author: '미하엘 엔데',
	isbn: '9788935652792',
	page: '101',
	publisher: '진드라 케펙'
}, {	
	id: 18,
	name: '그가 그립다',
	author: '유시민',
	isbn: '9788965132882',
	page: '265',
	publisher: '생각의길'
}, {	
	id: 19,
	name: '정글만리 3',
	author: '조정래',
	isbn: '9788965744047',
	page: '420',
	publisher: '해냄출판사'
}, {	
	id: 20,
	name: '소소한 풍경',
	author: '박범신',
	isbn: '9788957078013',
	page: '358',
	publisher: '자음과모음'
}, {	
	id: 21,
	name: '정글만리 2',
	author: '조정래',
	isbn: '9788965744030',
	page: '420',
	publisher: '해냄출판사'
}, {
	id: 22,
	name: '정글만리 1',
	author: '조정래',
	isbn: '9788965744023',
	page: '420',
	publisher: '해냄출판사'
}, {
	id: 23,
	name: '멈추면, 비로소 보이는 것들',
	author: '혜민',
	isbn: '9788965700609',
	page: '292',
	publisher: '쌤앤파커스'
}, {	
	id: 24,
	name: '뽀롱뽀롱 뽀로로 스티커로 배우는 한글',
	author: '키즈아이콘 편집부',
	isbn: '9788990812902',
	page: '102',
	publisher: '키즈아이콘'
}, {	
	id: 25,
	name: '아이가 있는 집에 딱좋은 가족밥상',
	author: '김정미',
	isbn: '9788996347255',
	page: '319',
	publisher: '레시피팩토리'
}, {	
	id: 26,
	name: '강신주의 감정수업',
	author: '강신주',
	isbn: '9788937488351',
	page: '528',
	publisher: '민음사'
}, {	
	id: 27,
	name: '내일은 실험왕 27',
	author: '스토리 a.',
	isbn: '9788937884801',
	page: '188',
	publisher: '아이세움'
}, {	
	id: 28,
	name: '내 아이를 위한 감정코칭',
	author: '조벽, 최성애, 존 가트맨',
	isbn: '9788947527897',
	page: '276',
	publisher: '한국경제신문사'
}, {	
	id: 29,
	name: '몽환화',
	author: '히가시노 게이고',
	isbn: '9791185014517',
	page: '428',
	publisher: '비채'
}, {	
	id: 30,
	name: '우아한 거짓말',
	author: '김려령',
	isbn: '9788936456221',
	page: '228',
	publisher: '창비'
}];

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(cors());

// 라우트합니다.
app.get('/books/get', function (request, response) {
	var callback = request.param('callback');

	// 변수를 선언합니다.
	var output = null;
	
	// 요청 매개변수 sidx를 처리합니다.
	var sidx = request.param('sidx');
	if (sidx == '') { sidx = 'id'; }

	// 요청 매개변수 sord를 처리합니다.
	var sord = request.param('sord');
	output = _.sortBy(books, function (item) {
		return item[sidx];
	});
	if (sord == 'desc') { output = output.reverse(); }

	// 요청 매개변수 _search를 처리합니다.
	var _search = request.param('_search');
	if (_search == 'true') {
		var searchField = request.param('searchField');
		var searchString = request.param('searchString');

		output = _.filter(output, function (item) {
			if (searchField == 'id') {
				return item.id == Number(searchString);
			} else {
				return item[searchField].indexOf(searchString) != -1;
			}
		});
	}

	// 요청 매개변수 page와 rows를 처리합니다.
	var page = Number(request.param('page'));
	var rows = Number(request.param('rows'));
	var totalRecords = books.length;
	var totalPages = Math.ceil(totalRecords / rows);
	var start = rows * page - rows;

	// 응답합니다.
	output = output.slice(start, start + rows);
	
	response.send(callback + '(' + JSON.stringify({
		page: page,
		total: totalPages,
		records: totalRecords,
		rows: _.map(output, function (item) {
			return {
				id: item.id,
				cell: _.toArray(item)
			};
		})
	}) + ')');
});

app.post('/books/edit', function(request, response) {
	// 요청 매개변수 oper를 처리합니다.
	switch (request.param('oper')) {
		case 'add':
			books.push({
				id: books.length + 1,
				name: request.param('name'),
				author: request.param('author'),
				isbn: request.param('isbn'),
				page: request.param('page'),
				publisher: request.param('publisher')
			});
			break;
		case 'del':
			var id = Number(request.param('id'));
			books = _.reject(books, function (item) {
				return item.id == id;
			});
			break;
		case 'edit':
			var id = Number(request.param('id'));
			book = _.find(books, function (item) {
				return item.id == id;
			});
			book.name = request.param('name');
			book.author = request.param('author');
			book.isbn = request.param('isbn');
			book.page = request.param('page');
			book.publisher = request.param('publisher');
			break;
	}

	// 응답합니다.
	response.send();
}); 

// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});