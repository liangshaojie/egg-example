global.getContentListFields = (type = '') => {
    let files = null;
    if (type == 'normal') {
      files = '_id title stitle sImg uAuthor date updateDate discription clickNum roofPlacement type videoImg state dismissReason categories isTop'
    } else if (type == 'simple') {
      files = '_id title stitle sImg stitle date updateDate clickNum roofPlacement type videoImg state dismissReason';
    } else if (type == 'stage1') {
      files = '_id title stitle sImg uAuthor date updateDate discription comments clickNum roofPlacement type videoImg state dismissReason categories isTop'
    } else {
      files = '_id title stitle sImg uAuthor date discription clickNum roofPlacement type appShowType imageArr videoArr duration simpleComments comments videoImg state dismissReason categories isTop'
    }
    // console.log('--files----', files)
    return files;
  }