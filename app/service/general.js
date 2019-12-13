const shortid = require('shortid');
const _ = require('lodash')


/**
 * 通用单个
 * @method item
 * @param  {[type]} res [description]
 * @param  {[type]} Model [description]
 * @return {[type]}         [description]
 */

exports._item = async(ctx, Model, {
    files = null,
    query = {},
    populate = []
} = {}) => {
    console.log(query._id)
    if (query._id && !shortid.isValid(query._id)) {
        console.log("9999999999999")
        throw new Error(ctx.__('validate_error_params'));
    }
    console.log(query, files)
    // return await Model.findOne(query, files).populate(populate).exec();
}