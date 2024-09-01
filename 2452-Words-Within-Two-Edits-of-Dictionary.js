/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    let result = [];
    for(let query of queries){
        for(let word of dictionary){
            let differences = 0;
            for(let i = 0; i < query.length; i++){
                if (query[i] !== word[i]) {
                    differences++;
                }
                if (differences > 2) break;
            }
            if (differences <= 2) {
                result.push(query);
                break;  // No need to check further if one match is found
            }
        }
    }

    return result;
};