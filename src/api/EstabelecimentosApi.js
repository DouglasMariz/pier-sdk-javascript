(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Terminal', '../model/Estabelecimento', '../model/PageTerminal', '../model/PageEstabelecimentos'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Terminal'), require('../model/Estabelecimento'), require('../model/PageTerminal'), require('../model/PageEstabelecimentos'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EstabelecimentosApi = factory(root.Pier.ApiClient, root.Pier.Terminal, root.Pier.Estabelecimento, root.Pier.PageTerminal, root.Pier.PageEstabelecimentos);
  }
}(this, function(ApiClient, Terminal, Estabelecimento, PageTerminal, PageEstabelecimentos) {
  'use strict';

  /**
   * Estabelecimentos service.
   * @module api/EstabelecimentosApi
   * @version 2.16.2
   */

  /**
   * Constructs a new EstabelecimentosApi. 
   * @alias module:api/EstabelecimentosApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET16 operation.
     * @callback module:api/EstabelecimentosApi~consultarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Terminal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Terminal
     * Este m\u00C3\u00A9todo permite consultar um determinado Terminal a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
     * @param {module:api/EstabelecimentosApi~consultarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Terminal}
     */
    this.consultarUsingGET16 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET16";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Terminal;

      return this.apiClient.callApi(
        '/api/terminais/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET6 operation.
     * @callback module:api/EstabelecimentosApi~consultarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Estabelecimento} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar estabelecimento por id
     * Consulta os detalhes de um determinado estabelecimento
     * @param {Integer} id Id
     * @param {module:api/EstabelecimentosApi~consultarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Estabelecimento}
     */
    this.consultarUsingGET6 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET6";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Estabelecimento;

      return this.apiClient.callApi(
        '/api/estabelecimentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET22 operation.
     * @callback module:api/EstabelecimentosApi~listarUsingGET22Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTerminal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Terminais cadastrados no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os terminais existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
     * @param {String} opts.terminal C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal.
     * @param {Integer} opts.numeroEstabelecimento N\u00C3\u00BAmero do estabelecimento a qual o terminal pertence.
     * @param {Integer} opts.idEstabelecimento N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento a qual o terminal pertence.
     * @param {module:api/EstabelecimentosApi~listarUsingGET22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTerminal}
     */
    this.listarUsingGET22 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'terminal': opts['terminal'],
        'numeroEstabelecimento': opts['numeroEstabelecimento'],
        'idEstabelecimento': opts['idEstabelecimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTerminal;

      return this.apiClient.callApi(
        '/api/terminais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET9 operation.
     * @callback module:api/EstabelecimentosApi~listarUsingGET9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEstabelecimentos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista Estabelecimentos
     * Lista todas os Estabelecimentos
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).
     * @param {Integer} opts.numeroReceitaFederal Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Receita Federal.
     * @param {String} opts.nome Nome do Estabelecimento.
     * @param {String} opts.descricao Raz\u00C3\u00A3o Social do Estabelecimento.
     * @param {String} opts.nomeFantasia T\u00C3\u00ADtulo Comercial do Estabelecimento.
     * @param {String} opts.cep C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
     * @param {String} opts.nomeLogradouro Nome do Logradouro.
     * @param {Integer} opts.numeroEndereco N\u00C3\u00BAmero do endere\u00C3\u00A7o.
     * @param {String} opts.complemento Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
     * @param {String} opts.bairro Nome do bairro do endere\u00C3\u00A7o.
     * @param {String} opts.cidade Nome da cidade do endere\u00C3\u00A7o.
     * @param {String} opts.uf Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
     * @param {String} opts.pais Nome do pa\u00C3\u00ADs.
     * @param {String} opts.dataCadastramento Data de Cadastro do Estabelecimento, no formato yyyy-MM-dd.
     * @param {String} opts.contato Nome da pessoa para contato com o Estabelecimento.
     * @param {String} opts.email E-mail da pessoa para contato com o Estabelecimento.
     * @param {Integer} opts.flagArquivoSecrFazenda Indica se o estabelecimento ser\u00C3\u00A1 inclu\u00C3\u00ADdo no arquivo de registro para a Secretaria da Fazenda Estadual.
     * @param {Integer} opts.flagCartaoDigitado Indica se o estabelecimento poder\u00C3\u00A1 originar transa\u00C3\u00A7\u00C3\u00B5es sem a leitura da tarja ou do chip do cart\u00C3\u00A3o.
     * @param {Integer} opts.inativo Indica se o estabelecimento est\u00C3\u00A1 inativo.
     * @param {module:api/EstabelecimentosApi~listarUsingGET9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEstabelecimentos}
     */
    this.listarUsingGET9 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'numeroReceitaFederal': opts['numeroReceitaFederal'],
        'nome': opts['nome'],
        'descricao': opts['descricao'],
        'nomeFantasia': opts['nomeFantasia'],
        'cep': opts['cep'],
        'nomeLogradouro': opts['nomeLogradouro'],
        'numeroEndereco': opts['numeroEndereco'],
        'complemento': opts['complemento'],
        'bairro': opts['bairro'],
        'cidade': opts['cidade'],
        'uf': opts['uf'],
        'pais': opts['pais'],
        'dataCadastramento': opts['dataCadastramento'],
        'contato': opts['contato'],
        'email': opts['email'],
        'flagArquivoSecrFazenda': opts['flagArquivoSecrFazenda'],
        'flagCartaoDigitado': opts['flagCartaoDigitado'],
        'inativo': opts['inativo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageEstabelecimentos;

      return this.apiClient.callApi(
        '/api/estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
