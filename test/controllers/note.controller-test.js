const subject = require('../../app/models/note.model.js');
var noteController = require("../../app/controllers/note.controller");
global.td = require('testdouble');

describe('NoteController', () => {
    it('findAll returns all the records from database ', () => {
        var noteControllerTest = td.replace('../../app/controllers/note.controller');
        var req = {};
        var res = {};
        // this is called stubing
        td.when(noteControllerTest.findAll(req, res)).thenCallback([]);                        
        noteControllerTest.findAll(req,res);                
        td.verify(noteControllerTest.findAll(req, res));
        td.reset();         
    });

    it('findOne returns given record from database from database', ()=>{

    })

});
