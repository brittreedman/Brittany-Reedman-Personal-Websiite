<script type="text/javascript">
	window.addEventListener("resize", adjustWidth);
	window.addEventListener("load", adjustWidth);
	function adjustWidth(){
		var w = window.innerWidth;
		if(w > 1200){
			document.getElementById('cont').style.width = "1044px";
		}
		else{
			if(w < 900){
				document.getElementById('cont').style.width = "788px";
			}
			else{
				document.getElementById('cont').style.width = "90%";
			}
		}
	}
</script>