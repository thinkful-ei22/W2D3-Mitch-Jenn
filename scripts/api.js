'use strict';
/* global $ */

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mitchjenn';
  
  const getItems = function(callback){
    //callback([{},{},{}]);
    return $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, callback){
    const newItem = JSON.stringify({
      name,

    });

    $.ajax({ 
      'url': `${BASE_URL}/items`,
      'method': 'post',
      'contentType': 'application/json',
      'data':newItem,
      'success': callback
    });
  };
  return {
    getItems,
    createItem
  };

}());

