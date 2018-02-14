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
    root.Pier.FaturaConsignadaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FaturaConsignadaResponse model module.
   * @module model/FaturaConsignadaResponse
   * @version 2.54.2
   */

  /**
   * Constructs a new <code>FaturaConsignadaResponse</code>.
   * Fatura Consignada
   * @alias module:model/FaturaConsignadaResponse
   * @class
   * @param totalServicos
   */
  var exports = function(totalServicos) {




























    this['totalServicos'] = totalServicos;
  };

  /**
   * Constructs a <code>FaturaConsignadaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaturaConsignadaResponse} obj Optional instance to populate.
   * @return {module:model/FaturaConsignadaResponse} The populated <code>FaturaConsignadaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('flagEmiteFatura')) {
        obj['flagEmiteFatura'] = ApiClient.convertToType(data['flagEmiteFatura'], 'Integer');
      }
      if (data.hasOwnProperty('dataVencimentoFatura')) {
        obj['dataVencimentoFatura'] = ApiClient.convertToType(data['dataVencimentoFatura'], 'String');
      }
      if (data.hasOwnProperty('valorTotalFatura')) {
        obj['valorTotalFatura'] = ApiClient.convertToType(data['valorTotalFatura'], 'Number');
      }
      if (data.hasOwnProperty('valorFaturaAnterior')) {
        obj['valorFaturaAnterior'] = ApiClient.convertToType(data['valorFaturaAnterior'], 'Number');
      }
      if (data.hasOwnProperty('valorPagamentoMinimo')) {
        obj['valorPagamentoMinimo'] = ApiClient.convertToType(data['valorPagamentoMinimo'], 'Number');
      }
      if (data.hasOwnProperty('valorPagamentoConsignado')) {
        obj['valorPagamentoConsignado'] = ApiClient.convertToType(data['valorPagamentoConsignado'], 'Number');
      }
      if (data.hasOwnProperty('valorPagamentoComplementar')) {
        obj['valorPagamentoComplementar'] = ApiClient.convertToType(data['valorPagamentoComplementar'], 'Number');
      }
      if (data.hasOwnProperty('totalComprasNacionais')) {
        obj['totalComprasNacionais'] = ApiClient.convertToType(data['totalComprasNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalComprasInternacionas')) {
        obj['totalComprasInternacionas'] = ApiClient.convertToType(data['totalComprasInternacionas'], 'Number');
      }
      if (data.hasOwnProperty('totalSaquesNacionais')) {
        obj['totalSaquesNacionais'] = ApiClient.convertToType(data['totalSaquesNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalSaquesInternacionais')) {
        obj['totalSaquesInternacionais'] = ApiClient.convertToType(data['totalSaquesInternacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosNacionais')) {
        obj['totalDebitosNacionais'] = ApiClient.convertToType(data['totalDebitosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosRecorrentes')) {
        obj['totalDebitosRecorrentes'] = ApiClient.convertToType(data['totalDebitosRecorrentes'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosInternacionais')) {
        obj['totalDebitosInternacionais'] = ApiClient.convertToType(data['totalDebitosInternacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosDiversosNacionais')) {
        obj['totalDebitosDiversosNacionais'] = ApiClient.convertToType(data['totalDebitosDiversosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalDebitosOpcionais')) {
        obj['totalDebitosOpcionais'] = ApiClient.convertToType(data['totalDebitosOpcionais'], 'Number');
      }
      if (data.hasOwnProperty('totalPagamentos')) {
        obj['totalPagamentos'] = ApiClient.convertToType(data['totalPagamentos'], 'Number');
      }
      if (data.hasOwnProperty('totalCreditosNacionais')) {
        obj['totalCreditosNacionais'] = ApiClient.convertToType(data['totalCreditosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('totalAjustes')) {
        obj['totalAjustes'] = ApiClient.convertToType(data['totalAjustes'], 'Number');
      }
      if (data.hasOwnProperty('totalTarifas')) {
        obj['totalTarifas'] = ApiClient.convertToType(data['totalTarifas'], 'Number');
      }
      if (data.hasOwnProperty('totalMulta')) {
        obj['totalMulta'] = ApiClient.convertToType(data['totalMulta'], 'Number');
      }
      if (data.hasOwnProperty('totalJuros')) {
        obj['totalJuros'] = ApiClient.convertToType(data['totalJuros'], 'Number');
      }
      if (data.hasOwnProperty('taxaRotativo')) {
        obj['taxaRotativo'] = ApiClient.convertToType(data['taxaRotativo'], 'Number');
      }
      if (data.hasOwnProperty('taxaSaque')) {
        obj['taxaSaque'] = ApiClient.convertToType(data['taxaSaque'], 'Number');
      }
      if (data.hasOwnProperty('taxaMaximaProximoPeriodo')) {
        obj['taxaMaximaProximoPeriodo'] = ApiClient.convertToType(data['taxaMaximaProximoPeriodo'], 'Number');
      }
      if (data.hasOwnProperty('totalServicos')) {
        obj['totalServicos'] = ApiClient.convertToType(data['totalServicos'], 'Number');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador da fatura.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da conta (id).
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da conta a qual a fatura se refere.
   * @member {Integer} flagEmiteFatura
   */
  exports.prototype['flagEmiteFatura'] = undefined;

  /**
   * Data de vencimento da fatura.
   * @member {String} dataVencimentoFatura
   */
  exports.prototype['dataVencimentoFatura'] = undefined;

  /**
   * Valor para pagamento total da fatura.
   * @member {Number} valorTotalFatura
   */
  exports.prototype['valorTotalFatura'] = undefined;

  /**
   * Valor total da fatura anterior.
   * @member {Number} valorFaturaAnterior
   */
  exports.prototype['valorFaturaAnterior'] = undefined;

  /**
   * Valor m\u00C3\u00ADnimo para pagamento da fatura.
   * @member {Number} valorPagamentoMinimo
   */
  exports.prototype['valorPagamentoMinimo'] = undefined;

  /**
   * Valor da fatura pago atrav\u00C3\u00A9s de desconto em folha.
   * @member {Number} valorPagamentoConsignado
   */
  exports.prototype['valorPagamentoConsignado'] = undefined;

  /**
   * Valor complementar para considerar o pagamento m\u00C3\u00ADnimo da fatura.
   * @member {Number} valorPagamentoComplementar
   */
  exports.prototype['valorPagamentoComplementar'] = undefined;

  /**
   * Valor total das compras nacionais lan\u00C3\u00A7adas na fatura.
   * @member {Number} totalComprasNacionais
   */
  exports.prototype['totalComprasNacionais'] = undefined;

  /**
   * Valor total das compras internacionais lan\u00C3\u00A7adas na fatura.
   * @member {Number} totalComprasInternacionas
   */
  exports.prototype['totalComprasInternacionas'] = undefined;

  /**
   * Valor total dos saques nacionais lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalSaquesNacionais
   */
  exports.prototype['totalSaquesNacionais'] = undefined;

  /**
   * Valor total dos saques internacionais lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalSaquesInternacionais
   */
  exports.prototype['totalSaquesInternacionais'] = undefined;

  /**
   * Valor total dos d\u00C3\u00A9bitos nacionais lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalDebitosNacionais
   */
  exports.prototype['totalDebitosNacionais'] = undefined;

  /**
   * Valor total dos d\u00C3\u00A9bitos recorrentes lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalDebitosRecorrentes
   */
  exports.prototype['totalDebitosRecorrentes'] = undefined;

  /**
   * Valor total dos d\u00C3\u00A9bitos internacionais lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalDebitosInternacionais
   */
  exports.prototype['totalDebitosInternacionais'] = undefined;

  /**
   * Valor total dos d\u00C3\u00A9bitos diversos nacionais lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalDebitosDiversosNacionais
   */
  exports.prototype['totalDebitosDiversosNacionais'] = undefined;

  /**
   * Valor total dos d\u00C3\u00A9bitos diversos opcionais lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalDebitosOpcionais
   */
  exports.prototype['totalDebitosOpcionais'] = undefined;

  /**
   * Valor total dos pagamentos lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalPagamentos
   */
  exports.prototype['totalPagamentos'] = undefined;

  /**
   * Valor total dos cr\u00C3\u00A9ditos nacionais lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalCreditosNacionais
   */
  exports.prototype['totalCreditosNacionais'] = undefined;

  /**
   * Valor total dos ajustes lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalAjustes
   */
  exports.prototype['totalAjustes'] = undefined;

  /**
   * Valor total das tarifas lan\u00C3\u00A7adas na fatura.
   * @member {Number} totalTarifas
   */
  exports.prototype['totalTarifas'] = undefined;

  /**
   * Valor total da multa lan\u00C3\u00A7ada na fatura.
   * @member {Number} totalMulta
   */
  exports.prototype['totalMulta'] = undefined;

  /**
   * Valor total dos juros de mora lan\u00C3\u00A7ados na fatura.
   * @member {Number} totalJuros
   */
  exports.prototype['totalJuros'] = undefined;

  /**
   * Valor percentual da taxa de juros rotativos.
   * @member {Number} taxaRotativo
   */
  exports.prototype['taxaRotativo'] = undefined;

  /**
   * Valor percentual da taxa de saque.
   * @member {Number} taxaSaque
   */
  exports.prototype['taxaSaque'] = undefined;

  /**
   * Valor m\u00C3\u00A1ximo percentual da taxa de encargos para o pr\u00C3\u00B3ximo per\u00C3\u00ADodo.
   * @member {Number} taxaMaximaProximoPeriodo
   */
  exports.prototype['taxaMaximaProximoPeriodo'] = undefined;

  /**
   * Apresenta a soma de todos os seguros cobrados na fatura do cliente.
   * @member {Number} totalServicos
   */
  exports.prototype['totalServicos'] = undefined;




  return exports;
}));
