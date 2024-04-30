function predictCluster() {
    // Get input values
    var sales = $('#sales').val();
    var profit = $('#profit').val();
    var originalAmount = $('#originalAmount').val();

    // Check if input values are not empty
    if (sales.trim() === '' || profit.trim() === '' || originalAmount.trim() === '') {
        $('#result').text("Please enter values for Sales, Profit, and Original Amount.");
        return;
    }

    // Make AJAX request to the endpoint
    $.ajax({
        type: "POST",
        url: "https://veranziverah.app.modelbit.com/v1/predict_cluster/latest",
        data: JSON.stringify({ "data": [sales, profit, originalAmount] }),
        contentType: "application/json",
        success: function(response) {
            // Display the result
            $('#result').text("Predicted Cluster: " + response.data);
        },
        error: function(xhr, status, error) {
            // Display error message if request fails
            $('#result').text("Error: wrong details " + error);
        }
    });
}
