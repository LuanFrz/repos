vipalnet.service('fluigAPI', function($http) {
    let _getGroups = () => {
        return $http({
            method: 'GET',
            url: `${WCMAPI.serverURL}/api/public/wcm/group`,
            async: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
    let _createFolder = function() {
        var userfluig = WCMAPI.userCode;
        var userNamefluig = WCMAPI.user;
        var company = WCMAPI.getTenantId();

        var sr = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">
              <soapenv:Header/>
              <soapenv:Body>
              <ws:createFolder>
                  <username>${userfluig}</username>
                  <password></password>
                  <companyId>${company}</companyId>
                  <Document>
                      <item>
                          <colleagueId>${userfluig}</colleagueId>
                          <colleagueName>${userNamefluig}</colleagueName>
                          <companyId>${company}</companyId>
                          <documentDescription>VipalNet</documentDescription>
                          <documentType>1</documentType>
                          <iconId>0</iconId>
                          <parentDocumentId>0</parentDocumentId>
                          <permissionType>2</permissionType>
                          <phisicalFileSize>0.0</phisicalFileSize>
                          <privateColleagueId/>
                          <privateDocument>false</privateDocument>
                          <protectedCopy>false</protectedCopy>
                          <imutable>true</imutable>
                          <publisherId>${userfluig}</publisherId>
                          <publisherName>${userNamefluig}</publisherName>
                          <securityLevel>2</securityLevel>
                          <volumeId>Default</volumeId>
                      </item>
                  </Document>
                  <security>
                      <item>
                          <attributionType>3</attributionType>
                          <attributionValue>all</attributionValue>
                          <companyId>${company}</companyId>
                          <downloadEnabled>true</downloadEnabled>
                          <permission>true</permission>
                          <securityLevel>1</securityLevel>
                          <securityVersion/>
                          <sequence>1</sequence>
                          <showContent>false</showContent>
                          <version>1000</version>
                      </item>
                  </security>
                  <Approvers>
                  </Approvers>
              </ws:createFolder>
              </soapenv:Body>
          </soapenv:Envelope>`;
        var url = WCMAPI.serverURL + '/webdesk/ECMFolderService?wsdl';

        return $http({
            method: 'POST',
            url: url,
            async: false,
            headers: {
                'Content-Type': 'text/xml',
            },
            data: sr,
        });
    };

    let _getIdToXML = function(data) {
        let transformString = data.data;
        let resultTransformed = String(transformString);
        let retorno1 = resultTransformed.split('<documentId>');
        let retorno2 = retorno1;
        retorno2.shift();
        let restFinal = String(retorno2);
        let splitadoFinal = restFinal.split('</documentId>');
        splitadoFinal.pop();
        let idFolderCreated = String(splitadoFinal);
        let idFolderFormated = parseInt(idFolderCreated);

        return idFolderFormated;
    };

    let _createSubFolder = function(nameFolder, parentId) {
        var userfluig = WCMAPI.userCode;
        var company = WCMAPI.getTenantId();
        var userNamefluig = WCMAPI.user;

        var sr = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">
              <soapenv:Header/>
                  <soapenv:Body>
                      <ws:createFolder>
                          <username>${userfluig}</username>
                          <password></password>
                          <companyId>${company}</companyId>
                          <Document>
                              <item>
                                  <colleagueId>${userfluig}</colleagueId>
                                  <colleagueName>${userNamefluig}</colleagueName>
                                  <companyId>${company}</companyId>
                                  <documentDescription>${nameFolder}</documentDescription>
                                  <documentType>1</documentType>
                                  <iconId>0</iconId>
                                  <parentDocumentId>${parentId}</parentDocumentId>
                                  <phisicalFileSize>0.0</phisicalFileSize>
                                  <privateColleagueId/>
                                  <privateDocument>false</privateDocument>
                                  <protectedCopy>false</protectedCopy>
                                  <imutable>true</imutable>
                                  <publisherId>${userfluig}</publisherId>
                                  <publisherName>${userNamefluig}</publisherName>
                                  <securityLevel>2</securityLevel>
                                  <volumeId>Default</volumeId>
                                  <inheritSecurity>false</inheritSecurity>
                              </item>
                          </Document>
                          <security>
                              <item>
                                  <attributionType>3</attributionType>
                                  <attributionValue>all</attributionValue>
                                  <companyId>${company}</companyId>
                                  <downloadEnabled>true</downloadEnabled>
                                  <permission>true</permission>
                                  <securityLevel>1</securityLevel>
                                  <securityVersion/>
                                  <sequence>1</sequence>
                                  <showContent>false</showContent>
                                  <version>1000</version>
                              </item>
                          </security>
                          <Approvers>
                          </Approvers>
                      </ws:createFolder>
                  </soapenv:Body>
              </soapenv:Envelope>`;

        var url = WCMAPI.serverURL + '/webdesk/ECMFolderService?wsdl';

        return $http({
            method: 'POST',
            url: url,
            async: false,
            headers: {
                'Content-Type': 'text/xml; charset=UTF-8',
            },
            data: sr,
        });
    };

    let _removeDocumentToId = parentId => {
        return $http({
            method: 'POST',
            url: `/api/public/2.0/documents/deleteDocument/${parentId}`,
            async: false,
            headers: {
                'Content-Type': 'text/xml; charset=UTF-8',
            },
        });
    };

    return {
        getGroups: _getGroups,
        creatingFolder: _createFolder,
        getIdToXML: _getIdToXML,
        createSubFolder: _createSubFolder,
        removeDocumentToId: _removeDocumentToId,
    };
});
