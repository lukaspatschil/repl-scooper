// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

import * as vscode from 'vscode';

import {
  getRange,
  globalVariables,
  parserFunction,
  requiresVariables,
} from './utils';

import ViewLoader from './view/ViewLoader';
import { command } from './utils/command';
import { func } from './utils/function';
import { parse } from 'acorn';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  let webview = vscode.commands.registerCommand('extension.replscooper', () =>
    func(context)
  );

  let commandview = vscode.commands.registerCommand(
    'extension.replcommand',
    () => command(context)
  );

  context.subscriptions.push(webview);
  context.subscriptions.push(commandview);
}

// this method is called when your extension is deactivated
export function deactivate() {}
