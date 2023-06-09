<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>
    <%@page import ="java.util.Date" %> <%-- 이게 임포트임 --%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Server Test - Tomcat 실행</title>
</head>
<body>
<%--
<% %>
<%! %>
<%= %>
 --%>

<%= new Date() %><hr color = "red" size="2">

<%
	for(int i=1; i<=10; i++){
		out.print(i+" ");
	}
%> <br>

<% for(int i=1; i<=10; i++){ %>
		hello <%=i %> <br />
<% 	} //for end%>


</body>
</html>