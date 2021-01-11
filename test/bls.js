let BLS = artifacts.require('BLSTest');

contract('BLS', (accounts) => {
    let message = '0x7b0a2020226f70656e223a207b0a20202020227072696365223a2039353931372c0a202020202274696d65223a207b0a20202020202022756e6978223a20313438333134323430302c0a2020202020202269736f223a2022323031362d31322d33315430303a30303a30302e3030305a220a202020207d0a20207d2c0a202022636c6f7365223a207b0a20202020227072696365223a2039363736302c0a202020202274696d65223a207b0a20202020202022756e6978223a20313438333232383830302c0a2020202020202269736f223a2022323031372d30312d30315430303a30303a30302e3030305a220a202020207d0a20207d2c0a2020226c6f6f6b7570223a207b0a20202020227072696365223a2039363736302c0a20202020226b223a20312c0a202020202274696d65223a207b0a20202020202022756e6978223a20313438333232383830302c0a2020202020202269736f223a2022323031372d30312d30315430303a30303a30302e3030305a220a202020207d0a20207d0a7d0a6578616d706c652e636f6d2f6170692f31';
    it('should verify a valid signature', () => {
        return BLS.deployed().then((instance) => {
            let signatureX = '11181692345848957662074290878138344227085597134981019040735323471731897153462';
            let signatureY = '6479746447046570360435714249272776082787932146211764251347798668447381926167';
            return instance.verify(message, signatureX, signatureY);
        });
    });
    //   it('should not verify a invalid signature', () => {
    //     return BLS.deployed().then((instance) => {
    //       let signatureX = '11181692345848957662074290878138344227085597134981019040735323471731897153462';
    //       let signatureY = '12345';
    //       return instance.verify(message, signatureX, signatureY);
    //     }).catch((err) => {
    //       assert.include(err.message, 'revert Pairing operation failed', 'Verification failed.');
    //     });
    //   });
    //   it('should not verify a invalid message', () => {
    //     return BLS.deployed().then((instance) => {
    //       let signatureX = '11181692345848957662074290878138344227085597134981019040735323471731897153462';
    //       let signatureY = '6479746447046570360435714249272776082787932146211764251347798668447381926167';
    //       return instance.verify('0x12345', signatureX, signatureY);
    //     }).catch((err) => {
    //       assert.include(err.message, 'revert Pairing operation failed', 'Verification failed.');
    //     });
    //   });
});
