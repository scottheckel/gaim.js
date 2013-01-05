test( "gaim object created correctly", function() {
	var g = new gaim({});
	ok(g.e, 'has create entity shortcut');
	ok(g.entity, 'has create entity method');
	ok(g.c, 'has create component shortcut');
	ok(g.component, 'has create component method');
	ok(g.cs, 'has component subscribe shortcut');
	ok(g.subscribe, 'has component subscribe method');
	ok(g.f, 'has find shortcut');
	ok(g.find, 'has find method');
	ok(g.r, 'has run shortcut');
	ok(g.run, 'has run method');
	ok(g.s, 'has stop shortcut');
	ok(g.stop, 'has stop method');
});

test( "create with no entities", function() {
	var g = new gaim({});
	var allEntities = g.f('*');
	ok(allEntities.length == 0, 'no entities stored initially')
});

test( "can create entity", function() {
	var g = new gaim({});
	var e = g.e('big,bird');
	equal(e.id, 1, 'entity id is correct');
	ok(e.on, 'has entity subscribe method');
	ok(e.t, 'has entity trigger shortcut');
	ok(e.co.length == 2, 'two components in entity');
	equal(e.co[0], 'big', 'big component found');
	equal(e.co[1], 'bird', 'bird component found');
	deepEqual(g.find('*')[0], e, 'entity can be found');
})