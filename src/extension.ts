import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	const preference = 'vincent.test';
	const config: boolean = vscode.workspace.getConfiguration().get(preference) as boolean;
	vscode.window.showInformationMessage(`vincent.test: ${config}`);
	// Determine the updated preference value.
	vscode.workspace.onDidChangeConfiguration((event: vscode.ConfigurationChangeEvent) => {
		if (event.affectsConfiguration(preference)) {
			const config: boolean = vscode.workspace.getConfiguration().get(preference) as boolean;
			vscode.window.showInformationMessage(`vincent.test: ${config}`);
		}
	});
}

export function deactivate() { }
