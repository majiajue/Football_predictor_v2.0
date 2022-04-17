import numpy as np
from flask import Flask, request, render_template
import pickle
import pandas as pd
from flask import jsonify
import json
import urllib.request


application = Flask(__name__)

model_logreg = pickle.load(open('Models/logreg.pkl', 'rb'))
model_logreg_half = pickle.load(open('Models/logreg_half.pkl', 'rb'))
model_linreg_24 = pickle.load(open('Models/linear_regression_24.pkl', 'rb'))

@application.route('/')
def home():
    
   return render_template('index.html')


@application.route('/api', methods=['GET'])

def api():
    
    home_team_menu = request.args.get('home_team')
    away_team_menu = request.args.get('away_team')

    df = pd.read_csv('list_last_update.csv') 
    
    home_team = df[df['Name']==home_team_menu]
    away_team = df[df['Name']==away_team_menu]
    
    X1 = np.array(home_team[['OVA', 'ATT', 'MID', 'DEF', 'Transfer Budget(M€)', 'Speed', 'Dribbling', 'Passing', 'Positioning', 'Crossing','Passing.1', 
                             'Shooting', 'Positioning.1', 'Aggression', 'Pressure', 'Team Width', 'Defender Line', 'DP', 'IP']])
        
    X2 = np.array(away_team[['OVA', 'ATT', 'MID', 'DEF', 'Transfer Budget(M€)', 'Speed', 'Dribbling', 'Passing', 'Positioning', 'Crossing','Passing.1', 
                             'Shooting', 'Positioning.1', 'Aggression', 'Pressure', 'Team Width', 'Defender Line', 'DP', 'IP']])
        
    X = np.concatenate((X1, X2), axis=None).astype(int)
    X = X.reshape(1, -1)
    
    prediction = model_logreg.predict(X)     #MATCH WINNER
    prediction2 = model_logreg.predict_proba(X)     #PROBABILITIES OF WINNING THE MATCH
    prediction3 = model_logreg_half.predict_proba(X)     #PROBABILITIES OF WINNING ON THE HALF TIME
    prediction_24 = model_linreg_24.predict(X) # LINEAR REGRESSION FOR THE REST OF VARIABLES
  
    
    data1=[]    
    data2=[] 
    list1=['prob_away_win_half','prob_draw_game_half','prob_home_win_half']    
    list2=['prob_away_win','prob_draw_game','prob_home_win']
    
    
    for i in range (0,3):
        x=round(100*prediction3[0,i],2)
        y=round(100*prediction2[0,i],2)
        data1.append(x)
        data2.append(y)
        
    dictionary1 = dict(zip(list1, data1))
    dictionary2 = dict(zip(list2, data2))
   
    data3=[] 
    list3=['total_goals_final','home_goals_final','away_goals_final','total_goals_half','home_goals_half','away_goals_half',
          'home_team_shots','away_team_shots','full_time_shots','home_team_shots_target','away_team_shots_target','full_time_shots_target',
          'home_team_corners','away_team_corners','full_time_corners','home_team_fouls_comitted','away_team_fouls_comitted',
          'Total_fouls_comitted','home_team_yellow_cards','away_team_yellow_cards','Total_yellow_cards','home_team_red_cards',
          'away_team_red_cards','Total_red_cards']  
   
    for i in range (0,24):
        x=round(prediction_24[0,i],2)
        data3.append(x)

    dictionary3 = dict(zip(list3, data3))
    total_dictionary = dict(dictionary1, **dictionary2, **dictionary3)
    
    return jsonify(total_dictionary)
    
    
@application.route('/predict')

def predict():
 
    with urllib.request.urlopen("http://127.0.0.1:5000/api?home_team=Manchester+City+English+Premier+League+%281%29&away_team=FC+Bayern+M%C3%BCnchen+German+1.+Bundesliga+%281%29") as url:
        
        # TO DO: put all this stuff in an loop:
        
        Total_data = json.loads(url.read().decode())
        
        
        value1 = 5
        Total_fouls_comitted = str(Total_data["Total_fouls_comitted"])
        Total_red_cards = str(Total_data["Total_red_cards"])
        Total_yellow_cards = str(Total_data["Total_yellow_cards"])
        away_goals_final = str(Total_data["away_goals_final"])
        away_goals_half = str(Total_data["away_goals_half"])
        away_team_corners = str(Total_data["away_team_corners"])
        away_team_fouls_comitted = str(Total_data["away_team_fouls_comitted"])
        away_team_red_cards = str(Total_data["away_team_red_cards"])
        away_team_shots = str(Total_data["away_team_shots"])
        away_team_shots_target = str(Total_data["away_team_shots_target"])
        away_team_yellow_cards = str(Total_data["away_team_yellow_cards"])
        full_time_corners = str(Total_data["full_time_corners"])
        full_time_shots = str(Total_data["full_time_shots"])
        full_time_shots_target = str(Total_data["full_time_shots_target"])
        home_goals_final = str(Total_data["home_goals_final"])
        home_goals_half = str(Total_data["home_goals_half"])
        home_team_corners = str(Total_data["home_team_corners"])
        home_team_fouls_comitted = str(Total_data["home_team_fouls_comitted"])
        home_team_red_cards = str(Total_data["home_team_red_cards"])
        home_team_shots = str(Total_data["home_team_shots"])
        home_team_shots_target = str(Total_data["home_team_shots_target"])
        home_team_yellow_cards = str(Total_data["home_team_yellow_cards"])
        prob_away_win = str(Total_data["prob_away_win"])
        prob_away_win_half = str(Total_data["prob_away_win_half"])
        prob_draw_game = str(Total_data["prob_draw_game"])
        prob_draw_game_half = str(Total_data["prob_draw_game_half"])
        prob_home_win = str(Total_data["prob_home_win"])
        prob_home_win_half = str(Total_data["prob_home_win_half"])
        total_goals_final = str(Total_data["total_goals_final"])
        total_goals_half = str(Total_data["total_goals_half"])


    
    return render_template('index.html', prob_home_win = prob_home_win, prob_draw_game = prob_draw_game, prob_away_win = prob_away_win)


if __name__ == "__main__":
    application.run(debug=True)
    
    

