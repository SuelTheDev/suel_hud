local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")


local HUD = {}

HUD.vida = 0
HUD.colete = 0
HUD.fome = 0
HUD.sede = 0

HUD.Voz = {}
HUD.Voz.estado = 0
HUD.Voz.falando = 0

HUD.Radio = {}
HUD.Radio.estado = 0
HUD.Radio.falando = 0

Velocimetro = {}
Velocimetro.velocidade = 0
Velocimetro.gas = 0
Velocimetro.farol = 0
Velocimetro.cinto = 0

local menu_celular = false


Citizen.CreateThread(function()
    while true do
        if IsPauseMenuActive() or IsScreenFadedOut() or menu_celular then
            SendNUIMessage({ hud = false })
        else
            local ped = PlayerPedId()
            HUD.colete = GetPedArmour(ped)
            HUD.vida = (GetEntityHealth(ped)-100)/300*100
            local carro = GetVehiclePedIsIn(ped)
            if IsPedInAnyVehicle(ped) then
                DisplayRadar(true)
                Velocimetro.gas = GetVehicleFuelLevel(carro)
                Velocimetro.farol = 0
                Velocimetro.velocidade = GetEntitySpeed(carro) * 3.6
                SendNUIMessage({ show_hud = true, show_car = true,  hud = HUD, car = Velocimetro })
            else
                DisplayRadar(false)
                SendNUIMessage({ show_hud = true, show_car = false,  hud = HUD })
            end
        end
        Citizen.Wait(0)
    end
end)

RegisterNetEvent("suel_hud:VoipTalking")
AddEventHandler("suel_hud:VoipTalking", function(status)
    HUD.Voz.falando = status
end)

RegisterNetEvent("suel_hud:VoipEstado")
AddEventHandler("suel_hud:VoipEstado", function(status)
    HUD.Voz.estado = status
end)

RegisterNetEvent("suel_hud:RadioEstado")
AddEventHandler("suel_hud:RadioEstado", function(status)
    HUD.Radio.estado = status
end)

RegisterNetEvent("suel_hud:RadioTalking")
AddEventHandler("suel_hud:RadioTalking", function(status)
    HUD.Radio.falando = status
end)

RegisterNetEvent("suel_hud:statusFome")
AddEventHandler("suel_hud:statusFome", function(status)
    HUD.fome = status    
end)

RegisterNetEvent("suel_hud:statusSede")
AddEventHandler("suel_hud:statusSede", function(status)
   HUD.sede = status 
end)



RegisterNetEvent("status:celular")
AddEventHandler("status:celular",function(status)
	menu_celular = status
end)