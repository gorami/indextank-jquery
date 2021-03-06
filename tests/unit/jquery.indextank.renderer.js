module("Module Renderer", { 
    setup: function() {
        this.resultSet = {
            query: "a query",
            results: [1, 2, 3, 4]
        };
        this.dummyFmt = function(item) {
            return $("<span/>");
        };
        this.okFmt = function(item) {
            ok(true);
            // return a dummy object
            return $("<span/>");
        };
    },
    teardown: function() {
    }
});



test( "check it calls format function for each result", function() {
  expect(4);

  r = $("<div/>").indextank_Renderer({format: this.okFmt});

  r.trigger("Indextank.AjaxSearch.success", this.resultSet);
  
});

test( "it changes target CSS when AjaxSearch is searching", function() {
  expect(1);

  t = new Object();
  t.style = {};

  r = $(t).indextank_Renderer();
  r.trigger("Indextank.AjaxSearch.searching");

  // the style should somehow change.
  // opacity at this time.
  // TODO change this test whenever Renderer allows to modify this behavior.
  notDeepEqual(t.style, {});
});

test( "it changes target CSS on AjaxSearch failure", function() {
  expect(1);

  t = new Object();
  t.style = {};

  r = $(t).indextank_Renderer();
  r.trigger("Indextank.AjaxSearch.failure");

  // the style should somehow change.
  // opacity at this time.
  // TODO change this test whenever Renderer allows to modify this behavior.
  notDeepEqual(t.style, {});

});

test( "it changes target CSS on AjaxSearch success", function() {
  expect(1);

  t = $("<div/>");
  r = $(t).indextank_Renderer({format: this.dummyFmt});
  r.trigger("Indextank.AjaxSearch.success", this.resultSet);

  // the style should somehow change.
  // opacity at this time.
  // TODO change this test whenever Renderer allows to modify this behavior.
  notDeepEqual(t.attr('style'), undefined);

});
