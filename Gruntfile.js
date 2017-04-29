//npm instll grunt --save-dev
//npm install grunt-cli -g
//npm install grunt-contrib-copy

module.exports = function(grunt){

	grunt.initConfig({

		copy: {

			public:{
				expand: true,
				cwd: 'app/public',
				src: '**',
				dest: 'app/dist'
			}
	
		},

		clean: {
			dis:{
				src: 'app/dist'
			}
		}
	
	});
	//registra ordens das tarefas
	grunt.registerTask('dist',['clean', 'copy']);
	grunt.registerTask('default','dist');


	//carrega as dependecias
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
}