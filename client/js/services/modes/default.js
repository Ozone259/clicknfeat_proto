'use strict';

angular.module('vassalApp.services')
  .factory('default_mode', [
    'command',
    function(command) {
      return function(modes) {
        var default_mode = {
          name: 'Default',
          'Alt B': function(scope) {
            if(scope.game.selection.length > 0) {
              var new_val = !scope.game.models[scope.game.selection[0]].state.show_blind;
              scope.game.newCommand(command('onSelection', 'toggle', 'blind', new_val));
            }
          },
          'Alt C': function(scope) {
            if(scope.game.selection.length > 0) {
              var new_val = !scope.game.models[scope.game.selection[0]].state.show_corrosion;
              scope.game.newCommand(command('onSelection', 'toggle', 'corrosion', new_val));
            }
          },
          'Ctrl C': function(scope) {
            if(scope.game.selection.length > 0) {
              modes['model_create'].info = [];
              var x_ref = scope.game.models[scope.game.selection[0]].state.x;
              var y_ref = scope.game.models[scope.game.selection[0]].state.y;
              modes['model_create'].x = x_ref+10;
              modes['model_create'].y = y_ref+10;
              _.each(scope.game.selection, function(id) {
                var offset_x = scope.game.models[id].state.x - x_ref;
                var offset_y = scope.game.models[id].state.y - y_ref;
                modes['model_create'].info.push({
                  info: scope.game.models[id].info,
                  offset_x: offset_x,
                  offset_y: offset_y
                });
              });
              modes.current = modes['model_create'];
            }
          },
          'Shift C': function(scope) {
            if(scope.game.selection.length === 1 &&
               (scope.game.models[scope.game.selection[0]].info.focus ||
                scope.game.models[scope.game.selection[0]].info.fury)) {
              scope.game.newCommand(command('onSelection', 'toggleControl'));
            }
          },
          'Ctrl E': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'setRotation', 90));
            }
          },
          'F': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggle', 'focus'));
            }
          },
          'Alt F': function(scope) {
            if(scope.game.selection.length > 0) {
              var new_val = !scope.game.models[scope.game.selection[0]].state.show_fire;
              scope.game.newCommand(command('onSelection', 'toggle', 'fire', new_val));
            }
          },
          'I': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggle', 'image'));
            }
          },
          'Alt I': function(scope) {
            if(scope.game.selection.length > 0) {
              var new_val = !scope.game.models[scope.game.selection[0]].state.show_incorporeal;
              scope.game.newCommand(command('onSelection', 'toggle', 'incorporeal', new_val));
            }
          },
          'Alt K': function(scope) {
            if(scope.game.selection.length > 0) {
              var new_val = !scope.game.models[scope.game.selection[0]].state.show_kd;
              scope.game.newCommand(command('onSelection', 'toggle', 'kd', new_val));
            }
          },
          'Shift L': function(scope) {
            modes.current = modes['los'];
          },
          'M': function(scope) {
            if(scope.game.selection.length > 0) {
              var new_val = !scope.game.models[scope.game.selection[0]].state.show_melee;
              scope.game.newCommand(command('onSelection', 'toggle', 'melee', new_val));
            }
          },
          'Ctrl N': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'setRotation', 0));
            }
          },
          'Alt P': function(scope) {
            if(scope.game.selection.length > 0) {
              var new_val = !scope.game.models[scope.game.selection[0]].state.show_leader;
              scope.game.newCommand(command('onSelection', 'toggle', 'leader', new_val));
            }
          },
          'R': function(scope) {
            if(scope.game.selection.length > 0) {
              var new_val = !scope.game.models[scope.game.selection[0]].state.show_reach;
              scope.game.newCommand(command('onSelection', 'toggle' ,'reach', new_val));
            }
          },
          'Shift R': function(scope) {
            modes.current = modes['ruler'];
          },
          'Alt S': function(scope) {
            if(scope.game.selection.length > 0) {
              var new_val = !scope.game.models[scope.game.selection[0]].state.show_stationary;
              scope.game.newCommand(command('onSelection', 'toggle', 'stationary', new_val));
            }
          },
          'Ctrl S': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'setRotation', 180));
            }
          },
          'T': function(scope) {
            modes.current = modes['model_target'];
          },
          'U': function(scope) {
            scope.game.newCommand(command('setSelection', []));
          },
          'Ctrl W': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'setRotation', 270));
            }
          },
          'Ctrl Z': function(scope) {
            scope.game.undoLastCommand();
          },
          'Alt 0': function(scope) {
            scope.game.board.reset();
          },
          'Ctrl 0': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggle', 'color', false));
            }
          },
          'Ctrl 1': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggle', 'color', '#0FF'));
            }
          },
          'Ctrl 2': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggle', 'color', '#F0F'));
            }
          },
          '3': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggleAoe', 3));
            }
          },
          'Ctrl 3': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggle', 'color', '#FF0'));
            }
          },
          '4': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggleAoe', 4));
            }
          },
          'Ctrl 4': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggle', 'color', '#00F'));
            }
          },
          '5': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggleAoe', 5));
            }
          },
          'Ctrl 5': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggle', 'color', '#0F0'));
            }
          },
          'Ctrl 6': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'toggle', 'color', '#F00'));
            }
          },
          'Delete': function(scope) {
            scope.game.newCommand(command('dropSelection'));
          },
          'Add': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'incrementFocus'));
            }
          },
          'Alt Add': function(scope) {
            scope.game.board.zoomIn();
          },
          'Substract': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'decrementFocus'));
            }
          },
          'Alt Substract': function(scope) {
            scope.game.board.zoomOut();
          },
          'Left': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'rotateLeft', false));
            }
          },
          'Shift Left': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'rotateLeft', true));
            }
          },
          'Alt Left': function(scope) {
            scope.game.board.moveLeft();
          },
          'Ctrl Left': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveLeft', false));
            }
          },
          'Ctrl Shift Left': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveLeft', true));
            }
          },
          'Down': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveBack', false));
            }
          },
          'Shift Down': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveBack', true));
            }
          },
          'Alt Down': function(scope) {
            scope.game.board.moveDown();
          },
          'Ctrl Down': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveDown', false));
            }
          },
          'Ctrl Shift Down': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveDown', true));
            }
          },
          'Right': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'rotateRight', false));
            }
          },
          'Shift Right': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'rotateRight', true));
            }
          },
          'Alt Right': function(scope) {
            scope.game.board.moveRight();
          },
          'Ctrl Right': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveRight', false));
            }
          },
          'Ctrl Shift Right': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveRight', true));
            }
          },
          'Up': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveFront', false));
            }
          },
          'Shift Up': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveFront', true));
            }
          },
          'Alt Up': function(scope) {
            scope.game.board.moveUp();
          },
          'Ctrl Up': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveUp', false));
            }
          },
          'Ctrl Shift Up': function(scope) {
            if(scope.game.selection.length > 0) {
              scope.game.newCommand(command('onSelection', 'moveUp', true));
            }
          },
          // ------------------------------------------------------------------
          'DragStart': function(scope, event, drag, dx, dy) {
            switch(drag.event)
            {
            case 'Template':
              {
                scope.game.templates.active = drag.target;
                drag.target.startDraging();

                modes.current = modes['template_drag'];
                break;
              }
            case 'Model':
              {
                // si la selection est vide, ajouter le model a la selection
                if(0 <= _.indexOf(scope.game.selection, drag.target.state.id)) {
                  scope.game.onSelection('startDraging');
                  modes['model_drag'].length = 0;

                  modes['model_drag'].start_x = drag.target.state.x;
                  modes['model_drag'].start_y = drag.target.state.y;
                  modes['model_drag'].end_x = drag.target.state.x;
                  modes['model_drag'].end_y = drag.target.state.y;
                  modes['model_drag'].length = '';
                  modes.current = modes['model_drag'];
                }
                break;
              }
            case 'Board':
              {
                modes.selection_drag.width = 0;
                modes.selection_drag.height = 0;

                modes.current = modes.selection_drag;
                break;
              }
            }
          },
          'Click': function(scope, event, drag, user_x, user_y, dx, dy) {
            switch(drag.event)
            {
            case 'Model':
              {
                if(event.ctrlKey) {
                  if(0 <= _.indexOf(scope.game.selection, drag.target.state.id)) {
                    scope.game.newCommand(command('removeFromSelection', [drag.target.state.id]));
                  }
                  else {
                    scope.game.newCommand(command('addToSelection', [drag.target.state.id]));
                  }
                }
                else {
                  scope.game.newCommand(command('setSelection', [drag.target.state.id]));
                }
                if(scope.game.selection.length > 0) {
                  scope.model_label = scope.game.models[scope.game.selection[0]].state.label;
                }
                break;
              }
            case 'Template':
              {
                scope.game.templates.active = drag.target;
                modes.current = modes['template'];
                break;
              }
            }
          },
        };
        return default_mode;
      }
    }
  ]);