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
    if (query._id && !shortid.isValid(query._id)) {
        throw new Error(ctx.__('validate_error_params'));
    }
    return await Model.findOne(query, files).populate(populate).exec();
}