(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrigemComercial', '../model/ListaOrigensComerciais'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrigemComercial'), require('../model/ListaOrigensComerciais'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PessoaApi = factory(root.Pier.ApiClient, root.Pier.OrigemComercial, root.Pier.ListaOrigensComerciais);
  }
}(this, function(ApiClient, OrigemComercial, ListaOrigensComerciais) {
  'use strict';

  /**
   * Pessoa service.
   * @module api/PessoaApi
   * @version 1.1.0
   */

  /**
   * Constructs a new PessoaApi. 
   * @alias module:api/PessoaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET1 operation.
     * @callback module:api/PessoaApi~consultarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercial} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Opera\u00C3\u00A7\u00C3\u00A3o utilizada para consultar uma determinada Origem Comercial 
     * Este m\u00C3\u00A9todo permite que sejam listados os registros de uma determinada Origem Comercial existente na base do emissor. Para isso, \u00C3\u00A9 preciso informar o seu respectivo c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id). 
     * @param {Integer} idOrigemComercial ID da Origem Comercial
     * @param {module:api/PessoaApi~consultarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrigemComercial}
     */
    this.consultarUsingGET1 = function(idOrigemComercial, callback) {
      var postBody = null;

      // verify the required parameter 'idOrigemComercial' is set
      if (idOrigemComercial == undefined || idOrigemComercial == null) {
        throw "Missing the required parameter 'idOrigemComercial' when calling consultarUsingGET1";
      }


      var pathParams = {
        'id_origem_comercial': idOrigemComercial
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OrigemComercial;

      return this.apiClient.callApi(
        '/api/pessoas/{id_origem_comercial}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET1 operation.
     * @callback module:api/PessoaApi~listarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListaOrigensComerciais} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as Pessoas cadastradas no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id).
     * @param {String} opts.nome Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;.
     * @param {String} opts.tipo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica).
     * @param {String} opts.cpf N\u00C3\u00BAmero do CPF, quando PF.
     * @param {String} opts.cnpj N\u00C3\u00BAmero do CNPJ, quando PJ.
     * @param {Date} opts.dataNascimento Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ.
     * @param {String} opts.cnpj2 N\u00C3\u00BAmero do CNPJ, quando PJ.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/PessoaApi~listarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ListaOrigensComerciais}
     */
    this.listarUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id_pessoa': opts['idPessoa'],
        'nome': opts['nome'],
        'tipo': opts['tipo'],
        'cpf': opts['cpf'],
        'cnpj': opts['cnpj'],
        'data_nascimento': opts['dataNascimento'],
        'cnpj': opts['cnpj2'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListaOrigensComerciais;

      return this.apiClient.callApi(
        '/api/pessoas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
