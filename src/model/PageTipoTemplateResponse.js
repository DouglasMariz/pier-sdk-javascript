(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TipoTemplateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TipoTemplateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PageTipoTemplateResponse = factory(root.Pier.ApiClient, root.Pier.TipoTemplateResponse);
  }
}(this, function(ApiClient, TipoTemplateResponse) {
  'use strict';

  /**
   * The PageTipoTemplateResponse model module.
   * @module model/PageTipoTemplateResponse
   * @version 2.50.5
   */

  /**
   * Constructs a new <code>PageTipoTemplateResponse</code>.
   * Lista de Tipo Template
   * @alias module:model/PageTipoTemplateResponse
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>PageTipoTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageTipoTemplateResponse} obj Optional instance to populate.
   * @return {module:model/PageTipoTemplateResponse} The populated <code>PageTipoTemplateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [TipoTemplateResponse]);
      }
      if (data.hasOwnProperty('first')) {
        obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
      }
      if (data.hasOwnProperty('firstPage')) {
        obj['firstPage'] = ApiClient.convertToType(data['firstPage'], 'Boolean');
      }
      if (data.hasOwnProperty('hasContent')) {
        obj['hasContent'] = ApiClient.convertToType(data['hasContent'], 'Boolean');
      }
      if (data.hasOwnProperty('hasNextPage')) {
        obj['hasNextPage'] = ApiClient.convertToType(data['hasNextPage'], 'Boolean');
      }
      if (data.hasOwnProperty('hasPreviousPage')) {
        obj['hasPreviousPage'] = ApiClient.convertToType(data['hasPreviousPage'], 'Boolean');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
      }
      if (data.hasOwnProperty('nextPage')) {
        obj['nextPage'] = ApiClient.convertToType(data['nextPage'], 'Integer');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfElements')) {
        obj['numberOfElements'] = ApiClient.convertToType(data['numberOfElements'], 'Integer');
      }
      if (data.hasOwnProperty('previousPage')) {
        obj['previousPage'] = ApiClient.convertToType(data['previousPage'], 'Integer');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('totalElements')) {
        obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Integer');
      }
      if (data.hasOwnProperty('totalPages')) {
        obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/TipoTemplateResponse>} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {Boolean} first
   */
  exports.prototype['first'] = undefined;

  /**
   * @member {Boolean} firstPage
   */
  exports.prototype['firstPage'] = undefined;

  /**
   * @member {Boolean} hasContent
   */
  exports.prototype['hasContent'] = undefined;

  /**
   * @member {Boolean} hasNextPage
   */
  exports.prototype['hasNextPage'] = undefined;

  /**
   * @member {Boolean} hasPreviousPage
   */
  exports.prototype['hasPreviousPage'] = undefined;

  /**
   * @member {Boolean} last
   */
  exports.prototype['last'] = undefined;

  /**
   * @member {Integer} nextPage
   */
  exports.prototype['nextPage'] = undefined;

  /**
   * @member {Integer} number
   */
  exports.prototype['number'] = undefined;

  /**
   * @member {Integer} numberOfElements
   */
  exports.prototype['numberOfElements'] = undefined;

  /**
   * @member {Integer} previousPage
   */
  exports.prototype['previousPage'] = undefined;

  /**
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;

  /**
   * @member {Integer} totalElements
   */
  exports.prototype['totalElements'] = undefined;

  /**
   * @member {Integer} totalPages
   */
  exports.prototype['totalPages'] = undefined;




  return exports;
}));
