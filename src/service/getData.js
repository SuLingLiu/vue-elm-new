
/**
 * 获取首页默认地址
 */

async function dealAjax(url,method,data) {
	method = method || 'get';
	let getParams = '';
	let postParams = '';

	if(method == 'get') {
		getParams = data;
	}else {
		postParams = data;
	}
	axios({
		method: method,
		url: url,
		params: getParams,
		data: postParams
	})
	.then(function (response) {
		const response = await response;
			return response
	})
	.catch(function (error) {
		throw new Error(error)
	});
}

/**
 * 获取首页默认地址
 */
export const cityGuess = () => dealAjax('/v1/cities', {
	type: 'guess'
});