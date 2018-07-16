(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GrupoChargebackResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GrupoChargebackResponse model module.
   * @module model/GrupoChargebackResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>GrupoChargebackResponse</code>.
   * {{{grupo_chargeback_response_description}}}
   * @alias module:model/GrupoChargebackResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>GrupoChargebackResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GrupoChargebackResponse} obj Optional instance to populate.
   * @return {module:model/GrupoChargebackResponse} The populated <code>GrupoChargebackResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{grupo_chargeback_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{grupo_chargeback_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));
