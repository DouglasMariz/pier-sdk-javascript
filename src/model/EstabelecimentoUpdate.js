(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ConsultaCadastroEstabelecimentoDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConsultaCadastroEstabelecimentoDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EstabelecimentoUpdate = factory(root.Pier.ApiClient, root.Pier.ConsultaCadastroEstabelecimentoDTO);
  }
}(this, function(ApiClient, ConsultaCadastroEstabelecimentoDTO) {
  'use strict';

  /**
   * The EstabelecimentoUpdate model module.
   * @module model/EstabelecimentoUpdate
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>EstabelecimentoUpdate</code>.
   * Par\u00C3\u00A2metros de requisi\u00C3\u00A7\u00C3\u00A3o de um estabelecimento
   * @alias module:model/EstabelecimentoUpdate
   * @class
   */
  var exports = function() {





































  };

  /**
   * Constructs a <code>EstabelecimentoUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstabelecimentoUpdate} obj Optional instance to populate.
   * @return {module:model/EstabelecimentoUpdate} The populated <code>EstabelecimentoUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('flagMatriz')) {
        obj['flagMatriz'] = ApiClient.convertToType(data['flagMatriz'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('nomeFantasia')) {
        obj['nomeFantasia'] = ApiClient.convertToType(data['nomeFantasia'], 'String');
      }
      if (data.hasOwnProperty('cep')) {
        obj['cep'] = ApiClient.convertToType(data['cep'], 'String');
      }
      if (data.hasOwnProperty('nomeLogradouro')) {
        obj['nomeLogradouro'] = ApiClient.convertToType(data['nomeLogradouro'], 'String');
      }
      if (data.hasOwnProperty('numeroEndereco')) {
        obj['numeroEndereco'] = ApiClient.convertToType(data['numeroEndereco'], 'Integer');
      }
      if (data.hasOwnProperty('bairro')) {
        obj['bairro'] = ApiClient.convertToType(data['bairro'], 'String');
      }
      if (data.hasOwnProperty('cidade')) {
        obj['cidade'] = ApiClient.convertToType(data['cidade'], 'String');
      }
      if (data.hasOwnProperty('complemento')) {
        obj['complemento'] = ApiClient.convertToType(data['complemento'], 'String');
      }
      if (data.hasOwnProperty('uf')) {
        obj['uf'] = ApiClient.convertToType(data['uf'], 'String');
      }
      if (data.hasOwnProperty('cep2')) {
        obj['cep2'] = ApiClient.convertToType(data['cep2'], 'String');
      }
      if (data.hasOwnProperty('nomeLogradouro2')) {
        obj['nomeLogradouro2'] = ApiClient.convertToType(data['nomeLogradouro2'], 'String');
      }
      if (data.hasOwnProperty('numeroEndereco2')) {
        obj['numeroEndereco2'] = ApiClient.convertToType(data['numeroEndereco2'], 'Integer');
      }
      if (data.hasOwnProperty('bairro2')) {
        obj['bairro2'] = ApiClient.convertToType(data['bairro2'], 'String');
      }
      if (data.hasOwnProperty('cidade2')) {
        obj['cidade2'] = ApiClient.convertToType(data['cidade2'], 'String');
      }
      if (data.hasOwnProperty('complemento2')) {
        obj['complemento2'] = ApiClient.convertToType(data['complemento2'], 'String');
      }
      if (data.hasOwnProperty('uf2')) {
        obj['uf2'] = ApiClient.convertToType(data['uf2'], 'String');
      }
      if (data.hasOwnProperty('obs')) {
        obj['obs'] = ApiClient.convertToType(data['obs'], 'String');
      }
      if (data.hasOwnProperty('contato')) {
        obj['contato'] = ApiClient.convertToType(data['contato'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('flagArquivoSecrFazenda')) {
        obj['flagArquivoSecrFazenda'] = ApiClient.convertToType(data['flagArquivoSecrFazenda'], 'Integer');
      }
      if (data.hasOwnProperty('flagCartaoDigitado')) {
        obj['flagCartaoDigitado'] = ApiClient.convertToType(data['flagCartaoDigitado'], 'Integer');
      }
      if (data.hasOwnProperty('inativo')) {
        obj['inativo'] = ApiClient.convertToType(data['inativo'], 'Integer');
      }
      if (data.hasOwnProperty('idMoeda')) {
        obj['idMoeda'] = ApiClient.convertToType(data['idMoeda'], 'Integer');
      }
      if (data.hasOwnProperty('idPais')) {
        obj['idPais'] = ApiClient.convertToType(data['idPais'], 'Integer');
      }
      if (data.hasOwnProperty('associadoSPCBrasil')) {
        obj['associadoSPCBrasil'] = ApiClient.convertToType(data['associadoSPCBrasil'], 'Integer');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoEstabelecimento')) {
        obj['idTipoEstabelecimento'] = ApiClient.convertToType(data['idTipoEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('correspondencia')) {
        obj['correspondencia'] = ApiClient.convertToType(data['correspondencia'], 'Integer');
      }
      if (data.hasOwnProperty('cargoContato')) {
        obj['cargoContato'] = ApiClient.convertToType(data['cargoContato'], 'String');
      }
      if (data.hasOwnProperty('tipoPagamento')) {
        obj['tipoPagamento'] = ApiClient.convertToType(data['tipoPagamento'], 'String');
      }
      if (data.hasOwnProperty('consulta')) {
        obj['consulta'] = ConsultaCadastroEstabelecimentoDTO.constructFromObject(data['consulta']);
      }
      if (data.hasOwnProperty('consulta2')) {
        obj['consulta2'] = ConsultaCadastroEstabelecimentoDTO.constructFromObject(data['consulta2']);
      }
      if (data.hasOwnProperty('consulta3')) {
        obj['consulta3'] = ConsultaCadastroEstabelecimentoDTO.constructFromObject(data['consulta3']);
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], ['String']);
      }
    }
    return obj;
  }


  /**
   * Indica se \u00C3\u00A9 matriz ou filial.
   * @member {Integer} flagMatriz
   */
  exports.prototype['flagMatriz'] = undefined;

  /**
   * Nome do Estabelecimento.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Raz\u00C3\u00A3o Social do Estabelecimento.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * T\u00C3\u00ADtulo Comercial do Estabelecimento.
   * @member {String} nomeFantasia
   */
  exports.prototype['nomeFantasia'] = undefined;

  /**
   * C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
   * @member {String} cep
   */
  exports.prototype['cep'] = undefined;

  /**
   * Nome do Logradouro.
   * @member {String} nomeLogradouro
   */
  exports.prototype['nomeLogradouro'] = undefined;

  /**
   * N\u00C3\u00BAmero do endere\u00C3\u00A7o.
   * @member {Integer} numeroEndereco
   */
  exports.prototype['numeroEndereco'] = undefined;

  /**
   * Nome do bairro do endere\u00C3\u00A7o.
   * @member {String} bairro
   */
  exports.prototype['bairro'] = undefined;

  /**
   * Nome da cidade do endere\u00C3\u00A7o.
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
   * @member {String} complemento
   */
  exports.prototype['complemento'] = undefined;

  /**
   * Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
   * @member {String} uf
   */
  exports.prototype['uf'] = undefined;

  /**
   * C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
   * @member {String} cep2
   */
  exports.prototype['cep2'] = undefined;

  /**
   * Nome do Logradouro .
   * @member {String} nomeLogradouro2
   */
  exports.prototype['nomeLogradouro2'] = undefined;

  /**
   * N\u00C3\u00BAmero do endere\u00C3\u00A7o.
   * @member {Integer} numeroEndereco2
   */
  exports.prototype['numeroEndereco2'] = undefined;

  /**
   * Nome do bairro do endere\u00C3\u00A7o.
   * @member {String} bairro2
   */
  exports.prototype['bairro2'] = undefined;

  /**
   * Nome da cidade do endere\u00C3\u00A7o.
   * @member {String} cidade2
   */
  exports.prototype['cidade2'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
   * @member {String} complemento2
   */
  exports.prototype['complemento2'] = undefined;

  /**
   * Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
   * @member {String} uf2
   */
  exports.prototype['uf2'] = undefined;

  /**
   * Detalhes espec\u00C3\u00ADficos quanto ao Cadastro do Estabelecimento.
   * @member {String} obs
   */
  exports.prototype['obs'] = undefined;

  /**
   * Nome da pessoa para contato com o Estabelecimento.
   * @member {String} contato
   */
  exports.prototype['contato'] = undefined;

  /**
   * E-mail da pessoa para contato com o Estabelecimento.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Indica se o estabelecimento ser\u00C3\u00A1 inclu\u00C3\u00ADdo no arquivo de registro para a Secretaria da Fazenda Estadual.
   * @member {Integer} flagArquivoSecrFazenda
   */
  exports.prototype['flagArquivoSecrFazenda'] = undefined;

  /**
   * Indica se o estabelecimento poder\u00C3\u00A1 originar transa\u00C3\u00A7\u00C3\u00B5es sem a leitura da tarja ou do chip do cart\u00C3\u00A3o.
   * @member {Integer} flagCartaoDigitado
   */
  exports.prototype['flagCartaoDigitado'] = undefined;

  /**
   * Indica se o estabelecimento est\u00C3\u00A1 inativo.
   * @member {Integer} inativo
   */
  exports.prototype['inativo'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da moeda.
   * @member {Integer} idMoeda
   */
  exports.prototype['idMoeda'] = undefined;

  /**
   * Identificador de Pa\u00C3\u00ADs.
   * @member {Integer} idPais
   */
  exports.prototype['idPais'] = undefined;

  /**
   * N\u00C3\u00BAmero do associado ao SPCBrasil.
   * @member {Integer} associadoSPCBrasil
   */
  exports.prototype['associadoSPCBrasil'] = undefined;

  /**
   * C\u00C3\u00B3digo de Categoria de Mercado.
   * @member {Integer} mcc
   */
  exports.prototype['mcc'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento.
   * @member {Integer} idTipoEstabelecimento
   */
  exports.prototype['idTipoEstabelecimento'] = undefined;

  /**
   * Indicador para qual endere\u00C3\u00A7o as correspond\u00C3\u00AAncias ser\u00C3\u00A3o enviadas, onde 1 \u00C3\u00A9 ORIGEM e 2 ENDERE\u00C3\u0087O DE CORRESPOND\u00C3\u008ANCIA.
   * @member {Integer} correspondencia
   */
  exports.prototype['correspondencia'] = undefined;

  /**
   * Cargo do contato do estabelecimento.
   * @member {String} cargoContato
   */
  exports.prototype['cargoContato'] = undefined;

  /**
   * Tipo do regime de pagamento do estabelecimento.
   * @member {module:model/EstabelecimentoUpdate.TipoPagamentoEnum} tipoPagamento
   */
  exports.prototype['tipoPagamento'] = undefined;

  /**
   * Consulta de cadastro n\u00C3\u00BAmero um.
   * @member {module:model/ConsultaCadastroEstabelecimentoDTO} consulta
   */
  exports.prototype['consulta'] = undefined;

  /**
   * Consulta de cadastro n\u00C3\u00BAmero um.
   * @member {module:model/ConsultaCadastroEstabelecimentoDTO} consulta2
   */
  exports.prototype['consulta2'] = undefined;

  /**
   * Consulta de cadastro n\u00C3\u00BAmero um.
   * @member {module:model/ConsultaCadastroEstabelecimentoDTO} consulta3
   */
  exports.prototype['consulta3'] = undefined;

  /**
   * Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
   * @member {Array.<String>} sort
   */
  exports.prototype['sort'] = undefined;


  /**
   * Allowed values for the <code>tipoPagamento</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoPagamentoEnum = { 
    /**
     * value: CENTRALIZADO
     * @const
     */
    CENTRALIZADO: "CENTRALIZADO",
    
    /**
     * value: PV
     * @const
     */
    PV: "PV"
  };

  return exports;
}));
