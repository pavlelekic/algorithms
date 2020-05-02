
export default function(arr) {
    let totalMoney = 0;
    let hasStocks = false;
    for (let i = 0; i < arr.length; i++) {
        if (hasStocks) {
            // if top peak -> buy
            if (i > 0 && arr[i - 1] < arr[i] && (i === arr.length - 1 || arr[i - 1] < arr[i] && arr[i] > arr[i + 1])) {
                totalMoney += arr[i];
                hasStocks = false;
            }
        } else {
            // if bottom peak -> buy
            if ((i - 1 < 0 || arr[i - 1] > arr[i]) && (i + 2 >= arr.length || arr[i] < arr[i + 1])) {
                totalMoney -= arr[i];
                hasStocks = true;
            }
        }
    }
}
