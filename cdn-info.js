<script>
	getCDNinfo = function() {
	$.ajax({
		url: "/",
		success: function(data, status) {
			let cache-server = data.split("Ohc-Cache-Hit:");
			let cache-status = data.split("X-Cache-Status:");
				document.getElementById("cache-status").innerHTML = cache-tatus;
                document.getElementById("cache-server").innerHTML = cache-server;
				break;
		}
	})
}
</script>

