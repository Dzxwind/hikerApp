[
  {
    "repeat(30)": {
      user_id: "{{objectId()}}",
      user_index: "{{index()}}",
      user_name: "{{surname()}}",
      user_age:"{{integer(16,40)}}",
      user_img: function() {
        return "../../static/images/headImg/headImg" + this.user_index + ".jpg";
      },
      user_sex: '{{random("男","女")}}',
      user_sign: "{{lorem(1,'sentences')}}",
      way_index: [{ "repeat(0,8)": "{{integer(0,20)}}" }],
      article_index: [{ "repeat(0,2)": "{{integer(0,20)}}" }]
    }
  },
  {
    "repeat(20)": {
      article_id: "{{objectId()}}",
      article_index: "{{index()}}",
      article_name: "{{lorem(8,'words')}}",
      article_img: function() {
        return "../../static/images/articleImg/articleImg" + this.article_index + ".jpg";
      },
      article_content: "{{lorem(1,'paragraphs')}}",
      user_index: "{{integer(30)}}",
      way_index: "{{integer(20)}}"
    }
  },
  {
    "repeat(20)": {
      way_id: "{{objectId()}}",
      way_index: "{{index()}}",
      way_name: "{{lorem(2,'words')}}",
      way_subname:"{{city()}}",
      way_img: function() {
        return "../../static/images/wayImg/wayImg" + this.way_index + ".jpg";
      },
      way_intro: "{{lorem(1,'paragraphs')}}",
      user_index:  [{ "repeat(0,5)": "{{integer(0,30)}}" }],
      article_index: [{ "repeat(0,3)": "{{integer(0,20)}}" }]
    }
  }
];