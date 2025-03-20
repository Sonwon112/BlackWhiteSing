<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>경고</title>
</head>
<body>
	<script>
		var msg = '${msg}';
		var url = '${url}';
		alert(msg);
		if(url === "backPage"){
			location.href
		}else{
			location.href=url;	
		}
	</script>
</body>
</html>