-- Resource Metadata
fx_version 'cerulean'
games { 'gta5' }

author 'Swellington'
description 'HUD Simples para vRPEx'
version '1.0.2'

-- What to run
client_scripts {
    "@vrp/lib/utils.lua",
    'lilith.lua'
}

ui_page 'nui/mikael.html'

files {
    'nui/**'
}